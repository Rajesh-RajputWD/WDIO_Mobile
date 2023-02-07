describe('Android Native Feature Test', () =>
{
it('Access an Activity directly', async ()=>
{
await driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");

//pause
driver.pause(3000);
//Assertion
await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();

})
it.only('Working with alert Dialogs', async() =>
{
//access activity
await driver.startActivity("io.appium.android.apis", 
    "io.appium.android.apis.app.AlertDialogSamples");
    
await($('//*[@resource-id="io.appium.android.apis:id/two_buttons"]')).click();
//accept alert
//await driver.acceptAlert();

//dismiss alert
//await driver.dismissAlert();

//get alert text
console.log('ALERT TEXT------->', await driver.getAlertText());

//click on the OK button
await $('//*[@resource-id="android:id/button1"]').click();

//assertion - alert box is no longer visible
await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();


})


});