const puppeteer = require('puppeteer');
const url = 'http://credit.stu.edu.cn/english/setlocale.aspx?locale=zh-cn';
 
(async () => {
      const browser = await puppeteer.launch({
        executablePath: 'H:/Mini Applet/myPuppeteer/chrome/chrome.exe',
        headless: true
      });
	  try{
      const page = await browser.newPage();
      console.time();
      await page.goto(url);
      console.log('Page jump succeed');
	  const url1= await page.url();
	  console.log('ready to fill in');
      await page.type('#txtUserID','17jyzhong2');
      await page.type('#txtUserPwd','ASDqwe123');
      await page.click('#btnLogon');
	  page.on('dialog', async dialog => {
		console.log(dialog.message()); //´òÓ¡µ¯¿òµÄÄÚÈÝ
		await dialog.dismiss(); //¹Ø±Õµ¯¿ò
		 console.timeEnd();
		 process.exit(0)
		});
      await page.waitForNavigation({
		waitUntil: 'networkidle0'
     }).then(async ()=>{
      if(page.url()==url1){
      //Ìø×ªÊ§°Ü
      console.log('fail: ID or Password error');
      }
      else{
      console.log('success');
     } })
	 }catch(e){
		 console.log(e);
		 console.log('can not connect with Network');
	 }
	 finally{
		 console.timeEnd();
		 browser.close();
	 }
})();
