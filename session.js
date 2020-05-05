var webdriver=require('selenium-webdriver');
var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.get('http://google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('hello world');
driver.findElement({name:'q'}).sendKeys(webdriver.Key.ENTER);
//driver.findElement(webdriver.By.className('z1asCe MZy1Rb')).click();
 driver.wait(webdriver.until.elementLocated({xpath:'//*[@id="rso"]/div[3]/div/div[1]/div/div/div[1]/a/h3'}));
 driver.findElement({xpath:'//*[@id="rso"]/div[3]/div/div[1]/div/div/div[1]/a/h3'}).click();
 driver.quit();