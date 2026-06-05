import {Page, Locator, expect} from "@playwright/test"

export class UnicornHome {
    
    page: Page;
    dealsCheck: Locator;
    productSearch: Locator;
    searchBar: Locator;
    searchtextbox: Locator;

    constructor( page:Page){
        
        this.page = page;
        this.dealsCheck = page.locator("//a[@routerlink='/deals-of-day']");
        this.productSearch = page.getByRole('button', { name: ' Search' });
        this.searchBar = page.locator("//input[@id='searchbar']"); 
        this.searchtextbox = page.getByRole('textbox', { name: 'I\'m Looking For' });
    }

    async unicornURL(){
        await this.page.goto("https://shop.unicornstore.in/",{timeout:60000});
    }

    async pageCheck(){
        await expect(this.dealsCheck).toBeVisible();
    }

    async searchProduct(productName : string):Promise<void> {
        await this.productSearch.click();
        await this.searchBar.click();
        await this.searchtextbox.fill(productName);
        await this.searchtextbox.press("Enter");
    }
}