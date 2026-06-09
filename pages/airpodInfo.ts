import {Page, Locator, expect} from "@playwright/test";

export class AirpodInfoPage{

    page:Page;
    verificationLink: Locator;
    airpodLink: Locator;
    mrpText: Locator;
    titleVerification: Locator;
    cartButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.verificationLink = page.getByRole('link', { name: 'Gripp Airpods 3 Silicon Case + Strap + Keyring Hook - Indigo', exact: true });
        this.airpodLink = page.getByRole('link', { name: 'Product Image AirPods Pro (2nd gen)' });
        this.mrpText = page.locator('app-accessories');
        this.titleVerification = page.locator('app-accessories');
        this.cartButton = page.locator('button:has-text("Add To Cart")').first();
        // this.cartButton = page.getByRole('button', { name: 'Add to Cart', exact: true }).first();
    }

    async verifyPageStability(){
        await expect(this.verificationLink).toBeVisible();
    }

    async productClick(){
        await this.airpodLink.click();
    }

    async mrpVisibilityCheck(){
        await expect(this.mrpText).toBeVisible();
    }

    async titleCheck(){
        await expect(this.titleVerification).toBeVisible();
    }

    async addToCart(){
        await this.cartButton.click();
    }
}