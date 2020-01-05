const {I} = inject();

class BasePage {
    constructor() {
        console.log('Base page constructor');
    }

    async goToPageByURL(url) {
        await I.amOnPage(url);
    }

    async goToPage(button) {
        await I.click(button)
    }
}

module.exports = BasePage;