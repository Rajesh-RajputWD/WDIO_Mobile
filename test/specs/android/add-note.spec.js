describe('Add Note', () =>
{
it('Skip Tutorial', async() =>
{
await $('//*[@text="SKIP"]').click();
await expect($('//*[@text="Add note"]')).toBeDisplayed();
})

it('add a note, save changes & verify', async () =>
{
await $('//*[@text="Add note"]').click();
await $('//*[@text="Text"]').click();
await expect($('//*[@text="Editing"]')).toBeDisplayed();
//Add Notes Title
await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]').addValue("Language List");
//Add Notes Body
await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]').addValue("Java/nJavascript/nTypeScript");

//save the changes
await driver.back();
await driver.back();
})

})