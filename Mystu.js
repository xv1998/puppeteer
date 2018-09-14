const puppeteer = require('puppeteer');
 
(async () => {
      const browser = await puppeteer.launch({
        executablePath: 'H:/Mini Applet/myPuppeteer/chrome/chrome.exe',
        headless: false
      });
      const page = await browser.newPage();
      console.time();
      await page.goto('https://sso.stu.edu.cn/login?service=https%3A%2F%2Fmy.stu.edu.cn%2Fv3%2F');
      const url1 = (page.url()).match(/(\S*)login/)[1];
      console.log(url1)
      await page.type('#username','17jyzhong2',{delay:50});
      await page.type('#password','ASDqwe123',{delay:50});
      await page.click('.login-button');
      await page.waitFor(1000);
      const url2 = page.url();
      console.log(url2);
      if(url2.indexOf(url1)!= -1){ 
      //µÇÂ¼²»³É¹¦
      console.log('fail :ID or Password error');
      }
      else{
            console.log('success');
        }
      console.timeEnd();
      browser.close();
})();
