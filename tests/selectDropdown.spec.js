import { expect,test } from "@playwright/test";

test('select dropdown testcase', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const selectDropdownLoc = page.locator('#country')
    await selectDropdownLoc.scrollIntoViewIfNeeded({timeout:2000})
    await selectDropdownLoc.selectOption({label:'India'})
    await page.waitForTimeout(2000)
    await selectDropdownLoc.selectOption({index:1})
    await page.waitForTimeout(2000)
    await selectDropdownLoc.selectOption('Canada')
    await page.waitForTimeout(2000)
    await selectDropdownLoc.selectOption({value:'uk'})

})

test.only('select multi dropdown testcase',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const multiDropdown = page.locator('#colors');
    await multiDropdown.scrollIntoViewIfNeeded()
    await multiDropdown.selectOption(['Red', 'Blue', 'Green']);
    await page.waitForTimeout(3000)
    // Verify selected values
    const selectedValues = await multiDropdown.evaluate(el => 
        Array.from(el.selectedOptions).map(option => option.value)
    );

    console.log('Selected values:', selectedValues);
    expect(selectedValues).toContain('red');
    expect(selectedValues).toContain('blue');

    await page.waitForTimeout(3000);
})