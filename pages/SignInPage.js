const Fixture = require('../fixtures/fixtures');
const {I} = inject();

class SignInPage {

// setting locators

    constructor() {
        this.email = 'input[name="email"]';
        this.password = 'input[name="password"]';
        this.signInButton = 'Sign In';
        this.signUpButton = 'Sign Up';
        this.ForgotPasswordButton = 'Forgot password?';
    }

//intro methods

    async signIn(email = Fixture.createEmail(12),
                 password = Fixture.generateText(8)) {
        I.fillField(this.email, email);
        I.fillField(this.password, password);
        await I.click(this.signInButton);
    }

    async goToSignUp() {
        await I.click(this.signUpButton);
    }

    async goToForgotPassword() {
        await I.click(this.ForgotPasswordButton);
    }
}

module.exports = new SignInPage();