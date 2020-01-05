exports.config = {
    tests: './tests/*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            url: 'https://test.com',
            show: true,
            windowSize: '960x1080',
            restart: false,
        },
        ResembleHelper: {
            require: "codeceptjs-resemblehelper",
            screenshotFolder: "./output/",
            baseFolder: "./output/screenshots/base/",
            diffFolder: "./output/screenshots/diff/"
        },
        MyHelper: {
            require: './helpers/myHelper.js'
        }
    },
    include: {
        I: './config/steps_file.js',
        basePage: './pages/BasePage.js',
        signInPage: './pages/SignInPage.js',
        signUpPage: './pages/SignUpPage.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'codeceptJS'
};