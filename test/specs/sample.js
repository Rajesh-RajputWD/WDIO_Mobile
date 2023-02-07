describe("Sample Test Android", () => {

    //$ - Single Element
    //$$ - Multiple Element

    it("click on element and assert", async() => {
        await $('~App').click()

        await ('//android.widget.TextView[@content-desc="Menu"]').click
        await $('~Inflate from XML').isDisplayed();
    })


    it('Find element by class name', async() =>
    {
     //find element by class name
   const className  = await $ ('android.widget.TextView');
   console.log(await className.getText());
   //Assertion
   await expect (className).toHaveText("API Demos");
    })

    it('Find elements using Xpath', async() =>
    {
        //xpath -- (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="App"]').click();
        await $('//android.widget.TextView[@text="Alert Dialogs"]').click();
        await $('//android.widget.Button[@text="List dialog"]').click();
        await $('//android.widget.TextView[@text="Command one"]').click();

        const textAssertion = await $ ('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 0 , Command one");
    });

    it('Find elements using UIAutomator', async() =>
    {
     //find by text contains
     await $('//android.widget.TextView[@content-desc="App"]').click();
     await $('android = new UiSelector().textContains("Alert")').click();

    });

    it('Find Multiple Elements', async() =>
    {

        const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App',
    'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views']
        const actualList = []
      //Find multiple elements
     const textList = await $$('android.widget.TextView');
    //console.log(textList.getText()); --->this doesnt work
      //Loop through elements

     for(const element of textList) 
     {
        actualList.push(await element.getText());
     }
      //Assert the list
      await expect(actualList).toEqual(expectedList);
    })
it.only('Exercise - Text Field', async() => 
{
await $ ('~Views').click();
await $('~Auto Complete').click();
await $('~1. Screen Top').click();

//Enter the country name

const countryField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
await countryField.addValue('India');

//verify country name
await expect(countryField).toHaveText('India');
})
    
   
});