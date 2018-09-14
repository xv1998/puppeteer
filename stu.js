const puppeteer = require('puppeteer');
 
(async () => {
      const browser = await puppeteer.launch({
        executablePath: 'H:/Mini Applet/myPuppeteer/chrome/chrome.exe',
        headless: false
      });
      const page = await browser.newPage();
      await page.goto('https://sso.stu.edu.cn/login?service=https%3A%2F%2Fmy.stu.edu.cn%2Fv3%2F');
      const url1= page.url();
      await page.type('#username','17jyzhong2',{delay: 100});
      await page.type('#password','ASDqwe123',{delay: 100});
      await page.click('.login-button');
      await page.waitForNavigation();
      const url2 = page.url();
      if(url2==url1){ 
      //µÇÂ¼²»³É¹¦
      console.log('fail :ID or Password error');
      }
      else{
            console.log('success');
        }
      browser.close();
})();
