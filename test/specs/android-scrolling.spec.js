describe('Android Vertical Scrolling', () =>
{

it('Vertical Scrolling', async() =>
{
await $('~App').click();
await $('~Activity').click();

//perform scrolling -- to end (not stable if element gets moved)
//await $('android = new UiScrollable(new UiSelector().scrollable(true))scrollToEnd(1, 5)');

await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();

//await $('~Secure Surfaces').click();

//Assertion
await expect ($('~Secure Dialog')).toExist();
})


})