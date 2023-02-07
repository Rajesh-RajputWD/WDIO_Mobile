describe('iOS find elements', () =>
{
it ('Login SauceLab Test', async()=>
{
    await $('~test-Username').addValue("standard_user");
    await $('~test-Password').addValue("secret_sauce");
    await $('~test-LOGIN').click();

})


})