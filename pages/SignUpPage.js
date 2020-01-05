const {I} = inject();

const Fixture = require('../fixtures/fixtures');


class SignUpPage {

// setting locators

    constructor() {
        this.firstName = 'input[name="firstName"]';
        this.lastName = 'input[name="lastName"]';
        this.organizationEmail = 'input[name="email"]';
        this.password = 'input[name="password"]';
        this.confirm = 'input[name="repeatPassword"]';
        this.phone = 'input[name="phone"]';
        this.toolTip = 'div[class="tooltip-inner _bottom-left"]'
        this.country = 'div[class="dd-header-title"]'
        this.license = 'License Agreement';
        this.signInButton = 'Sign In';
        this.signUpButton = 'Sign Up';
    }

// intro methods

    async signUp(firstName = Fixture.generateText(10),
                 lastName = Fixture.generateText(10),
                 email = Fixture.createEmail(12),
                 password = Fixture.generateText(8),
                 confirm = password,
                 phone = Fixture.generatePhoneNumber()) {
        I.fillField(this.firstName, firstName);
        I.fillField(this.lastName, lastName);
        I.fillField(this.organizationEmail, email);
        I.fillField(this.password, password);
        I.fillField(this.confirm, confirm);
        I.fillField(this.phone, phone);
        await I.click(this.signUpButton);
    }

    async goToSignIn() {
        await I.click(this.signInButton);
    }

}

module.exports = new SignUpPage();