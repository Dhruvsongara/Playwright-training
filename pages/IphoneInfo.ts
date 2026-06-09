import {Page, Locator, expect} from "@playwright/test";

export class IphoneInfoPage{

    page: Page;
    verificationLink: Locator;
    iphone17Link: Locator;
    mrpText: Locator;
    titleVerification: Locator;
    color: Locator;
    storage: Locator;
    cartButton: Locator;

    constructor(page:Page){

        this.page = page;
        this.verificationLink = page.locator('html').getByRole('document');
        this.iphone17Link = page.getByRole('link', { name: 'Product Image iPhone 17e', exact: true });
        this.mrpText = page.locator('app-product-price');
        this.titleVerification = page.locator('h1');
        this.color = page.locator('div').filter({ hasText: /^White$/ });
        this.storage = page.locator('div').filter({ hasText: /^512GB$/ });
        this.cartButton = page.getByRole('button', { name: 'Add to Cart', exact: true });
    
    }

    async verifyPageStability(){
        await expect(this.verificationLink).toBeVisible();
    }

    async productClick(){
        await this.iphone17Link.click();
    }

    async mrpVisibilityCheck(){
        await expect(this.mrpText).toBeVisible();
    }

    async titleCheck(){
        await expect(this.titleVerification).toBeVisible();
    }

    async colorSelection(){
        await this.color.click();
    }
    
    async storageSelection(){
        await this.storage.click();
    }

    async addToCart(){
        await this.cartButton.click();
    }
}