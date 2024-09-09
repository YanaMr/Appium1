exports.config = {
    runner: 'local',
    specs: [
        './tests/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        "appium:platformVersion": '12.0',
        "appium:deviceName": 'S3PO',
        "appium:app": 'C:/Users/yanab/StudioProjects/android-course-quiz/app/build/outputs/apk/debug/app-debug.apk',
        "appium:automationName": 'UiAutomator2',
        "appium:appActivity": 'com.iiddd.quiz.ui.MainActivity',
        "appium:noReset": 'false'
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
