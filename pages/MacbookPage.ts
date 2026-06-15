import {Page, expect, Locator} from "@playwright/test";
 
export class MacbookPage{
 
    page: Page;
    accountBtn: Locator;
    addressBtn: Locator;
    wishlistBtn: Locator;
    prehookBtn: Locator;
    orderhistoryBtn: Locator;
    continueBtn: Locator;
    shopBtn: Locator;
    macBtn: Locator;
    m5chipLaptop: Locator;
    outofstockText: Locator;
    notifyBtn: Locator;
    nameField: Locator;
    mobileField: Locator;
    sendotpBtn: Locator;
    // verifyText: Locator;
 
    constructor(page:Page){
 
        this.page =  page;
        this.accountBtn = page.getByRole('link', { name: 'My Account' });
        this.addressBtn = page.getByRole('tab', { name: 'Address Manager' });
        this.wishlistBtn = page.getByRole('tab', { name: 'Wishlist' });
        this.prehookBtn = page.getByRole('tab', { name: 'Prebook' });
        this.orderhistoryBtn = page.getByRole('tab', { name: 'Order History' });
        this.continueBtn = page.getByRole('link', { name: 'Continue Shopping' });
        this.shopBtn = page.getByRole('link', { name: 'Shop ' });
        this.macBtn = page.getByRole('link', { name: '15-inch MacBook Air M5 Chip' });
        this.m5chipLaptop = page.getByRole('link', { name: 'Image Not Available 15-inch MacBook Air: Apple M5 chip with 10‑core CPU and 10‑core GPU 16GB Starting From: ₹137,655.00', exact: true });
        this.outofstockText = page.getByText('OUT OF STOCK');
        this.notifyBtn = page.getByRole('button', { name: 'Notify Me' });
        this.nameField = page.getByRole('textbox', { name: 'Enter your name...' });
        this.mobileField = page.getByRole('textbox', { name: 'Enter your phone number...' });
        this.sendotpBtn = page.getByRole('button', { name: 'Send OTP' });
        // this.verifyText = page.getByLabel('Notify Me');
 
    }
 
    async accountFlow(){
 
        await this.accountBtn.click();
        await this.addressBtn.click();
        await this.wishlistBtn.click();
        await this.prehookBtn.click();
        await this.orderhistoryBtn.click();
        await this.continueBtn.click();
    }
 
    async macSearch(){
 
        await this.shopBtn.click();
        await this.macBtn.click();
        await this.m5chipLaptop.click();
        await expect(this.outofstockText).toBeVisible();
    }
 
    async notifyMe(){
 
        await this.notifyBtn.click();
        await this.nameField.click();
        await this.nameField.fill('Dhruv');
        await this.mobileField.click();
        await this.mobileField.fill('9898989898');
        await this.sendotpBtn.click();
        // await expect(this.verifyText).toContainText('Verify');
    }
}
 