import {Page, Locator, expect} from "@playwright/test"

export class UnicornHome {
    
    page: Page;
    dealsCheck: Locator;
    productSearch: Locator;
    searchBar: Locator;
    searchtextbox: Locator;
    loginLink: Locator;
    emailField: Locator;
    passwordField: Locator;
    loginButton: Locator;
    loginVerify: Locator;

    constructor( page:Page){
        
        this.page = page;
        this.dealsCheck = page.locator("//a[@routerlink='/deals-of-day']");
        // this.loginLink = page.locator("//a[text()='Login']");
        this.loginLink = page.getByText('Login');
        this.emailField = page.locator("#email");
        this.passwordField = page.locator("#password");
        this.loginButton = page.getByRole("button", {name: 'Login',exact: true});
        this.loginVerify = page.locator('p-toastitem');
        this.productSearch = page.getByRole('button', { name: ' Search' });
        this.searchBar = page.locator("//input[@id='searchbar']"); 
        this.searchtextbox = page.getByRole('textbox', { name: 'I\'m Looking For' });
    }

    async unicornURL(){
        await this.page.goto("https://shop.unicornstore.in/",{timeout:90000});
    }

    async pageCheck(){
        await expect(this.dealsCheck).toBeVisible();
    }

    async login(email:string, password:string):Promise<void> {

        await this.loginLink.click();
        await this.emailField.click();
        await this.emailField.fill(email);
        // await this.emailField.fill('shrikeelabs.business@gmail.com');
        await this.passwordField.click();
        await this.passwordField.fill(password);
        // await this.passwordField.fill('Dhaval@123');
        await this.loginButton.click();
        await expect(this.loginVerify).toContainText('Login successful');
    }

    async searchProduct(productName : string):Promise<void> {
        await expect(this.productSearch).toBeVisible();
        await this.productSearch.click();
        await this.searchBar.click();
        await this.searchtextbox.fill(productName);
        await this.searchtextbox.press("Enter");
    }
}