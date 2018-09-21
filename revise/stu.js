const puppeteer = require('puppeteer');
const url = 'https://sso.stu.edu.cn/login?service=https%3A%2F%2Fmy.stu.edu.cn%2Fv3%2F';
 
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
      const url1 = await (page.url()).match(/(\S*)login/)[1];
	  console.log('ready to fill in');
      await page.type('#username','17jyzhong2');
      await page.type('#password','ASDqwe12');
      await page.click('.login-button');
      await page.waitFor(500);
	  const url2 = page.url();
      if(url2.indexOf(url1)!= -1){
      //跳转失败
      console.log('fail: ID or Password error');
      }
      else{
      console.log('success');
     } 
	 }catch(e){
		 console.log(e);
		 console.log('can not connect with Network');
	 }
	 finally{
		 console.timeEnd();
		 browser.close();
	 }
})();
