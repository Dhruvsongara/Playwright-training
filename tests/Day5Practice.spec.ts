import {test, expect} from "@playwright/test";

test("popup handling", async ({page})=>{

    //simple alert
    await page.goto("https://qaplayground.vercel.app/");
    page.once("dialog",async dialog =>{
        await dialog.accept();
    });
    await page.locator("#btn-simple-alert").click();
    await expect(page.getByTestId("alert-output")).toContainText("Simple alert was accepted");

    //confirmation alert accept
    page.once("dialog",async dialog =>{
        await dialog.accept();
    });
    await page.locator("#btn-confirm-alert").click();
    await expect(page.getByTestId("alert-output")).toContainText("✓ Confirmation accepted");

    //confirmation alert dismiss
    page.once("dialog",async dialog =>{
        await dialog.dismiss();
    });
    await page.locator("#btn-confirm-alert").click();
    await expect(page.getByTestId("alert-output")).toContainText("✗ Confirmation dismissed");

    //prompt alert
    page.once("dialog",async dialog =>{
        await dialog.accept("Dhruv");
    });
    await page.locator("#btn-prompt-alert").click();
    await expect(page.getByTestId("alert-output")).toContainText('✓ Prompt input: "Dhruv"');
});


// test("popup on real website", async ({page})=>{
    
//     page.goto("https://www.gsrtc.in/site/");
//     await page.locator("#popup-close").click();
//     page.once("dialog",async dialog =>{
//         await dialog.dismiss();
//     });
//     await page.locator(".btn.p-0.text-primary.me-1s").click();
// });


// test.only("Multiple tab handling", async ({browser})=>{

//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://www.gsrtc.in/site/");
//     await page.locator("#popup-close").click();
//     const page1Promise = page.waitForEvent("popup");
//     await page.locator("//a[text()='Unity Booking']").click();
//     const page1 = await page1Promise;
//     await expect(page1.locator("h1 span")).toContainText("Ekta Nagar");

//     await page1.close();
    
//     await page.locator('text="Bus Pass"').hover();
//     const page2promise = page.waitForEvent("popup");
//     // await page.locator('text=FAQs').click();
//     await page.getByRole('link', { name: 'FAQs' }).first().click();
//     const page2 = await page2promise;
//     await expect(page2).toHaveURL(/drive.google.com/);
// });


test("Multiple tab handling", async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.gsrtc.in/site/");
    await page.locator("#popup-close").click();

    //tab1
    const [page1] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("//a[text()='Unity Booking']").click()
    ]);
    // const page1 = await page1Promise;
    await expect(page1.locator("h1 span")).toContainText("Ekta Nagar");
    await page1.close();
    
    //tab2
    await page.locator('text="Bus Pass"').hover();
    const [page2] = await Promise.all([
        page.waitForEvent("popup"),
        // await page.locator('text=FAQs').click();
        await page.getByRole('link', { name: 'FAQs' }).first().click()
    ]);
    // const page2 = await page2promise;
    await expect(page2).toHaveURL(/drive.google.com/);
});

test("modal controller", async ({page})=>{

    await page.goto("https://qaplayground.vercel.app/");
    await page.locator("#btn-open-modal").click();
    await expect(page.getByTestId("modal-output")).toContainText("Modal is open");
    await page.locator("#modal-input").fill("Dhruv");
    await page.locator("#btn-modal-confirm").click();
    await expect(page.getByTestId("modal-output")).toContainText("Modal closed");
});

test("iframe practice", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framePage = await page.frameLocator("#courses-iframe");
    await framePage.locator("//a[text()='Mentorship']").first().click();
    await expect(framePage.locator(".auto-container h1")).toBeVisible();
});

test("browser context for multi users", async ({browser})=>{

    const user1 = await browser.newContext();
    const user2 = await browser.newContext();

    const page1 = await user1.newPage();
    const page2 = await user2.newPage();

    await page1.goto("https://www.croma.com/");
    await page2.goto("https://shop.unicornstore.in/");
});