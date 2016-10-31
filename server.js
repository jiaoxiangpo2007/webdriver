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

driver.get('http://www.mazgo.net:12980/sa');

//登录信息
var email='asmecta@sunagy.com';
var password='111111';

driver.findElement(By.id('email')).sendKeys(email);
driver.findElement(By.id('password')).sendKeys(password);
console.log(driver.getTitle());
driver.findElement(By.css('#login')).click();
