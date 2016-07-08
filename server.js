/**
 * Created by Administrator on 2015-10-19.
 */

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeLogFile('C:\Users\jiaox\Documents\new\log\log.txt')
    // .enableVerboseLogging()
    .build();

driver.get('http://www.mazgo.net:9999/Sa/Index/login.html');
// driver.wait(until.titleIs(''),1000);

driver.findElement(By.id('email')).sendKeys('asmecta@sunagy.com');
driver.findElement(By.id('password')).sendKeys('111111');

driver.findElement(By.id('login')).click();

driver.wait(until.titleIs('SUNAGY'), 1000);

driver.findElement(By.linkText('设备')).click();
// console.log(driver.getTitle());