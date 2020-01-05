const {I, signInPage, basePAge} = inject();

const PATHS = require('../factories/staticStrings/paths');

Feature('Visual Test');

Before(async () => {
    await I.amOnPage(PATHS.SIGN_IN);
});

Scenario('Sign in page', async () => {
    await I.saveScreenshot("signIn.png");
    await I.seeVisualDiff("signIn.png",
        {tolerance: 2, prepareBaseImage: false});
});