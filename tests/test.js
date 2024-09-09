const assert = require('assert');

describe('My App', () => {
    it('should open the app and display the correct title', async () => {
        const titleElement = await $('android=new UiSelector().text("Welcome")');
        const title = await titleElement.getText();
        assert.strictEqual(title, 'Welcome');
    });

    it('should allow login with valid credentials', async () => {
        const usernameField = await $('android=new UiSelector().resourceId("com.example:id/username")');
        const passwordField = await $('android=new UiSelector().resourceId("com.example:id/password")');
        const loginButton = await $('android=new UiSelector().resourceId("com.example:id/login")');

        await usernameField.setValue('myUsername');
        await passwordField.setValue('myPassword');
        await loginButton.click();

        const successMessage = await $('android=new UiSelector().text("Login successful")');
        assert.strictEqual(await successMessage.getText(), 'Login successful');
    });
});
