/**
 * Created by Administrator on 2015-10-19.
 */

var webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(/* ... */)
    .usingServer('http://www.sunagy.com','utf8')
    .build();