const puppeteer = require('puppeteer');
 
(async () => {
      const browser = await puppeteer.launch({
        executablePath: 'H:/Mini Applet/myPuppeteer/chrome/chrome.exe',
        headless: false
      });
      const page = await browser.newPage();
      await page.goto('http://credit.stu.edu.cn/english/setlocale.aspx?locale=zh-cn');
      const url1= page.url();
      await page.type('#txtUserID','17jyzhong2',{delay: 100});
      await page.type('#txtUserPwd','ASDqwe123' ,{delay: 100});
      await page.click('#btnLogon');
      await page.waitForNavigation();
      if(page.url()==url1){
      //Ìø×ªÊ§°Ü
      console.log('fail: ID or Password error');
      }
      else{
      console.log('success');
     } 
     browser.close();
})();
