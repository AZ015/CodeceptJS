const Helper = codecept_helper;
const Puppeteer = require('puppeteer');

class MyHelper extends Helper {

    async chooseCountryFromDropDown(selector, country) {
        const {page} = this.helpers.Puppeteer;
        await page.select(selector, country);
    }

}

module.exports = MyHelper;