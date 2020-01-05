const {I, signUpPage} = inject();

const PATHS = require('../factories/staticStrings/paths');
// const titles = require('../factories/staticStrings/strings');

Feature('Sign up');

Before(async () => {
    await I.amOnPage(PATHS.SIGN_UP);
});

Scenario('Choose country', async (signUpPage) => {
    await signUpPage.chooseCountry();
    pause();
    await I.see(strings.incorUsernameOrPassword, '.flash-error');
});

Scenario('Go to Sign In page',
    async (I, signUp, signIn) => {
        await I.amOnPage(paths.SIGN_UP);
        await signUp.goToSignIn();
        await I.see(signIn.texts.getStarted);
    });

Scenario('Go to terms of use page',
    async (I, signUp, termsOfUse) => {
        await I.amOnPage(paths.SIGN_UP);
        signUp.goToTerms();
        //Write helper method for switch between tabs!
        await I.pressKey(['ctrl', 'Tab']);
        await I.see(termsOfUse.texts.TERMS);
        await I.see(termsOfUse.texts.ANOVA);
    });