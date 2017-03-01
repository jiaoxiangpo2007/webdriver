/**
 * Created by Administrator on 2015-10-19.
 */
'use strict';

var webdriver = require('selenium-webdriver'),
    By = webdriver.By;
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

//服务器信息
driver.get('http://www.sunagy.com:9999/Sa');

//登录信息
var email=[
    'asmecta@sunagy.com',       //0
    'james.zhang@sunagy.com',   //1
    'test05@sunagy.com',        //2
    'test06@a.com',             //3
    'b01@b.com',                //4
    'eric@qq.com'               //5
];

driver.findElement(By.id('email')).sendKeys(email[2]);
driver.findElement(By.id('password')).sendKeys('111111');
console.log(driver.getTitle());
driver.findElement(By.css('#login')).click();
