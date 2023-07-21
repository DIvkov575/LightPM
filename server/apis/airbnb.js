
const puppeteer = require('puppeteer');
const sleep = require('sleep');
const {css} = require("cherio/lib/api/css");

let EMAIL = "blaaah74@gmail.com";
let PASS = "@DIma9364321";
let browser, page, buttons


const basicLoad = async () => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://www.airbnb.com/login');
    buttons = await page.$$("button");
    await buttons[6].click();
}


(async () => {

    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://www.airbnb.com/login');
    buttons = await page.$$("button");
    await buttons[6].click();
    // open email menu
    // try {
    //     await basicLoad()
    // } catch (e) {
    //     console.log(e);
    //     browser.close()
    //     await basicLoad()
    // }

    // enter email into email input
    let emailInput = await page.$("input");
    await emailInput.type(EMAIL);

    // procede to pass input
    let buttons1 = await page.$$("button");
    console.log(buttons);
    await buttons1[2].click();

    // input password
    let passInput = await page.waitForSelector("#email-signup-password")
    await passInput.type(PASS);
    //
    buttons = await page.$$("button");
    await buttons[2].click();
})();

// 5, 6