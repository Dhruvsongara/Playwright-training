import {Page, Locator, expect} from "@playwright/test";

export class CartPage{

    page: Page;
    cartMessage: Locator;
    cartButton: Locator;
    cartVerify: Locator;
    checkOutButton: Locator;
    orderPageVerify: Locator;
    firstNameTextbox: Locator;
    lastNameTextbox: Locator;
    emailTextbox: Locator;
    mobileTextbox: Locator;
    addressTextbox: Locator;
    cityTextbox: Locator;
    pincodeTextbox: Locator;
    stateDropdown: Locator;
    continueButton: Locator;
    checkoutPageVerify: Locator;
    deliveryRadioButton: Locator;
    storeSelectionDropdown: Locator;
    storeOptions: Locator;
    storeVerify: Locator;
    finalContinue: Locator;

    constructor(page:Page){

        this.page = page;
        this.cartMessage = page.locator('p-toastitem');
        this.cartButton = page.getByRole('button', { name: '' });
        this.cartVerify = page.locator('app-sidebarcart');
        this.checkOutButton = page.getByRole('button', { name: 'Continue Checkout' });
        this.orderPageVerify = page.getByRole('heading', { name: 'Order Details' });
        this.firstNameTextbox = page.locator('input[name="firstname"]');
        this.lastNameTextbox = page.locator('input[name="lastname"]');
        this.emailTextbox = page.locator('input[name="email"]');
        this.mobileTextbox = page.locator('input[name="phone"]');
        this.addressTextbox = page.locator('input[name="address1"]');
        this.cityTextbox = page.locator('input[name="city"]');
        this.pincodeTextbox = page.locator('input[name="zip"]');
        this.stateDropdown = page.locator("select[name='zone_id']");
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        //<button type="submit" _ngcontent-lma-c106="" class="btn btn_continue">Continue</button> aka getByRole('button', { name: 'Continue', exact: true })
        this.checkoutPageVerify = page.locator('app-checkout');
        this.deliveryRadioButton = page.getByText('Ship to your nearest Unicorn');
        this.storeSelectionDropdown = page.getByRole('button', { name: 'dropdown trigger' });
        this.storeOptions = page.getByRole('option', { name: 'Gandhinagar' });
        this.storeVerify = page.locator('address');
        this.finalContinue = page.getByRole('button', { name: 'Continue' });
    }

    async successfulAddtoCartCheck(){
        await expect(this.cartMessage).toContainText('Product successfully added to cart');
    }

    async cartButtonClick(){
        await this.cartButton.click();
    }

    async proceedcheckOut(){
        await expect(this.cartVerify).toContainText('iPhone 17e White 512GB');
        await this.checkOutButton.click();
    }

    async orderDetailsFillUp(){
        await expect(this.orderPageVerify).toBeVisible();
        await this.firstNameTextbox.click();
        await this.firstNameTextbox.fill('Dhruv');
        await this.lastNameTextbox.click();
        await this.lastNameTextbox.fill('Songara');
        await this.emailTextbox.click();
        await this.emailTextbox.fill('dhruv123@gmail.com');
        await this.mobileTextbox.click();
        await this.mobileTextbox.fill('9999999999');
        await this.addressTextbox.click();
        await this.addressTextbox.fill('Himatnagar');
        await this.cityTextbox.click();
        await this.cityTextbox.fill('Himatnagar');
        await this.pincodeTextbox.click();
        await this.pincodeTextbox.fill('383001');
        await this.stateDropdown.selectOption('1485');
        await this.continueButton.click();
    }

    async finalCheckout(){
        await expect(this.checkoutPageVerify).toContainText('Billing Address');
        await this.deliveryRadioButton.click();
        await this.storeSelectionDropdown.click();
        await this.storeOptions.click();
        await expect(this.storeVerify).toContainText('Gandhinagar');
        await this.finalContinue.click();
    }
}
