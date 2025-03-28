import {test,expect} from '@playwright/test'

test('simple testcase for radio button',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const male_checkbox = page.locator('#male')
    await male_checkbox.check()
    await page.waitForTimeout(5000)
    await expect(male_checkbox).toBeChecked();
    const female_checkbox = page.locator('#female')
    await female_checkbox.check()
    await page.waitForTimeout(5000)
    await expect(female_checkbox).toBeChecked()
    await expect(male_checkbox).not.toBeChecked()
})