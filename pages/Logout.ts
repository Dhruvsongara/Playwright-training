import {Page, Locator, expect} from "@playwright/test";

export class Logout{

    page: Page;
    logoutBtn: Locator;
    loginBtn: Locator;

    constructor(page:Page){

        this.page = page;
        this.logoutBtn = page.getByRole('button', { name: 'Logout' });
        this.loginBtn = page.getByText('Login');
    }

    async logout(){

        await expect(this.logoutBtn).toBeVisible();
        await this.logoutBtn.click();
    }

    async verifyLogout(){

        await expect(this.loginBtn).toBeVisible();
    }
}