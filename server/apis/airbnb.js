
const puppeteer = require('puppeteer');
const sleep = require('sleep');
const {css} = require("cherio/lib/api/css");

let EMAIL = "blaaah74@gmail.com";
let PASS = "@DIma9364321";
let browser, page, buttons

const busyWait = (duration) => {
    let start = new Date().getSeconds()
    let time = new Date().getSeconds()
    while (time != start + duration) {
        time = new Date().getSeconds()
    }
}

const basicLoad = async () => {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();
    await page.goto('https://www.airbnb.com/login');
    buttons = await page.$$("button");
    await buttons[6].click();
}

const login = async (page) => {
    await page.goto('https://www.airbnb.com/login');
    // open login form
    buttons = await page.$$("button");
    await buttons[6].click();
    // enter email into email input
    let emailInput = await page.$("input");
    await emailInput.type(EMAIL);
    // click continue (on email entry page)
    busyWait(3);
    let buttons1 = await page.$$("button");
    console.log(buttons);
    await buttons1[2].click();

    // input password
    let passInput = await page.waitForSelector("#email-signup-password")
    await passInput.type(PASS);
    //click continue on password entry page
    busyWait(3);
    buttons = await page.$$("button");
    await buttons[4].click();
}

(async () => {

    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();

    let listing_id = "915826443142383505"
    let calendar_prefix = "https://www.airbnb.com/multicalendar/"

    page.goto(listing_url)
    // page.goto('https://www.airbnb.com/hosting/listings');
    // let listing_count = await page.$$('#host-listings-header')


})();

// 5, 6