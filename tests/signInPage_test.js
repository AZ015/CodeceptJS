const {I, signInPage, basePAge} = inject();

const PATHS = require('../factories/staticStrings/paths');
const ERRORS = require('../factories/staticStrings/errors');
const TEXTS = require('../factories/staticStrings/strings');

Feature('Sign in');

let accounts = new DataTable(['email', 'password']);
accounts.add(['davert', '123456']); // adding records to a table
accounts.add(['admin', '123456']);

Before(async () => {
    await I.amOnPage(PATHS.SIGN_IN);
});

Data(accounts).Scenario('Sign in with incorrect password',
    async (current) => {
        await signInPage.signIn(current.email, current.password);
        await I.see(ERRORS.INCORRECT_USERNAME_OR_PASSWORD, '.form-tile-footer__error');
    });

Scenario('Sign in with invalid email format', async () => {
    await signInPage.signIn(email = 'test@@mailinator.com');
    await I.see(ERRORS.EMAIL_FORMAT, '.form-fields__error');
});

Scenario('Sign in with invalid password format', async () => {
    await signInPage.signIn(undefined, password = 'фывфывфыв');
    await I.see(ERRORS.INVALID_PASSWORD, '.form-fields__error');
});

Scenario('Sign in with empty email', async () => {
    await signInPage.signIn(email = '');
    await I.see(ERRORS.FIELD_IS_REQUIRED, '.form-fields__error');
    await I.see(ERRORS.FILL_ALL_REQUIR_FIELDS, '.form-tile-footer__error');
});

Scenario('Sign in with empty password', async () => {
    await signInPage.signIn(undefined, password = '');
    await I.see(ERRORS.FIELD_IS_REQUIRED, '.form-fields__error');
    await I.see(ERRORS.FILL_ALL_REQUIR_FIELDS, '.form-tile-footer__error');
});

Scenario('Sign in with empty email and password', async () => {
    await signInPage.signIn(email = '', password = '');
    await I.see(ERRORS.FIELD_IS_REQUIRED, '.form-fields__error');
    await I.see(ERRORS.FILL_ALL_REQUIR_FIELDS, '.form-tile-footer__error');
});

Scenario('Check password with min length', async () => {
    await signInPage.signIn(undefined, password = 'qwe');
    await I.see(ERRORS.PASSWORD_LENGTH, '.form-fields__error');
});

Scenario('Check password with max length', async () => {
    await signInPage.signIn(undefined,
        password = 'qweqweqweqqweqweqweqqweqweqweq1');
    await I.see(ERRORS.PASSWORD_LENGTH, '.form-fields__error');
});

Scenario('Successfully sign in', async () => {
    await signInPage.signIn(email = 'quza@mailinator.com',
        password = 'qwe123');
    // await I.see(ERRORS.PASSWORD_LENGTH, '.form-fields__error');
});

Scenario('Check go to Sign Up page', async () => {
    await signInPage.goToSignUp();
    await I.see(TEXTS.SIGN_UP_PAGE.TERMS, '.checkbox-component__label-wrapper');
});

Scenario('Check go to Forget Password page', async () => {
    await signInPage.goToForgotPassword();
    await I.see(TEXTS.SIGN_UP_PAGE.TERMS, '.checkbox-component__label-wrapper');
});