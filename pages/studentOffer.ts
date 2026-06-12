import {Page, Locator, expect} from "@playwright/test";

export class StudentOffer{

    page: Page;
    studentOfferLink: Locator;
    knowMoreBtn: Locator;
    downloadBtn: Locator;
    formText: Locator;
    proceedBtn: Locator;
    categoryText: Locator;
    macContainer: Locator;
    nextBtn: Locator;
    productText: Locator;
    imacContainer: Locator;
    optionsText: Locator;
    imacOptions: Locator;
    // optionsCount: Locator;
    // m4chipOptions: Locator;
    m4chipLaptop: Locator;
    inStockText: Locator; 
    confirmBtn: Locator;
    instituteField: Locator;
    pincodeField: Locator;
    cityField: Locator;
    stateField: Locator;
    countryOption: Locator;
    addressField: Locator;
    firstNameField: Locator;
    lastNameField: Locator;
    emailField: Locator;
    phoneField: Locator;
    passField: Locator;
    confirmPassField: Locator;
    registerBtn: Locator;
    textMsg: Locator;

    constructor(page:Page){
        this.page = page;
        this.studentOfferLink = page.getByRole('link', { name: 'Student Offers' });
        this.knowMoreBtn = page.getByRole('button', { name: 'Know More' });
        this.downloadBtn = page.getByRole('button', { name: 'Download the form & Get' });
        this.formText = page.locator('html').getByRole('document');
        this.proceedBtn = page.getByRole('button', { name: 'Proceed' });
        this.categoryText = page.locator('fieldset');
        this.macContainer = page.getByRole('heading', { name: 'Mac' });
        this.nextBtn = page.getByRole('dialog').getByRole('button', { name: 'Next', exact: true });
        this.productText = page.locator('fieldset');
        this.imacContainer = page.locator('.swiper-slide.ng-star-inserted.swiper-slide-active > .card > .card-body');
        this.optionsText = page.locator('fieldset');
        this.imacOptions = page.getByRole('button', {name: 'dropdown trigger'});
        // this.imacOptions = page.locator('p-dropdown');
        // this.optionsCount = this.page.locator('.p-dropdown-item');
        // this.imacOptions = page.getByText('Select Your Options');
        // this.m4chipOption = page.getByLabel('24-inch iMac with Retina 4.5K display: Apple M4 chip with 8‑core CPU and 8‑core GPU, 16GB, 256GB SSD - Silver', { exact: true }).getByText('24-inch iMac with Retina 4.5K');
        // this.m4chipOptions = page.locator('.p-dropdown-item');
        // this.m4chipOptions = page.getByRole('button', { name: 'dropdown trigger' });
        // this.m4chipLaptop = page.locator('.p-dropdown-item', { hasText: '24-inch iMac with Retina 4.5K display: Apple M4 chip with 8‑core CPU and 8‑core GPU, 16GB, 256GB SSD - Silver'});

        this.m4chipLaptop = page.getByRole('option', { name: '24-inch iMac with Retina 4.5K display: Apple M4 chip with 8‑core CPU and 8‑core GPU, 16GB, 256GB SSD - Silver', exact: true });
        this.inStockText = page.getByText('IN STOCK');
        this.confirmBtn = page.getByRole('dialog').getByRole('button', { name: 'Next', exact: true });
        this.instituteField = page.getByRole('textbox', { name: 'Institute Name*' });
        this.pincodeField = page.getByRole('textbox', { name: 'Pincode*' });
        this.cityField = page.getByRole('textbox', { name: 'City' });
        this.stateField = page.getByRole('textbox', { name: 'State' });
        this.countryOption = page.getByRole('combobox');
        this.addressField = page.getByRole('textbox', { name: 'Address 1*' });
        this.firstNameField = page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' });
        this.emailField = page.locator('#register_email');
        this.phoneField = page.locator('input[name="phone"]');
        this.passField = page.locator('input[name="password"]');
        this.confirmPassField = page.locator('input[name="conf_password"]');
        this.registerBtn = page.getByRole('button', { name: 'Register', exact: true });
        this.textMsg = page.locator('p-toastitem');
    }

    async goToStudentSection(){

        await this.studentOfferLink.click();
        await this.knowMoreBtn.click();
        await expect(this.downloadBtn).toBeVisible();
        await this.downloadBtn.click();
        await expect(this.formText).toContainText('Education Program Consent Form');
        await this.proceedBtn.click();
    }

    async chooseMac(){

        await expect(this.categoryText).toContainText('Choose Your Category');
        await this.macContainer.click();
        await this.nextBtn.click();
    }

    // async selectM4(){

    //     await expect(this.productText).toContainText('Select Your Product');
    //     await this.imacContainer.click();
    //     await expect(this.optionsText).toContainText('Choose Your Options');
    //     await this.page.waitForLoadState("networkidle");
    //     await this.imacOptions.click();
    //     await this.m4chipOptions.first().waitFor();
    //     await this.m4chipLaptop.click();
    //     // await this.m4chipOption.click();
    //     // await expect(this.inStockText).toBeVisible();
    //     // await this.inStockText.click();
    //     await this.confirmBtn.click();
    // }

    async selectM4Category() {

        await expect(this.productText).toContainText('Select Your Product');
        // await this.imacContainer.click({force:true});
        await this.imacContainer.dispatchEvent('click');
        await this.page.waitForTimeout(5000);
    }

    async selectM4Laptop() {

        await expect(this.optionsText).toContainText('Choose Your Options');
        // await this.page.scrollIntoViewIfNeeded();
        await this.imacOptions.click({force:true,timeout:30000});
        await expect(this.imacOptions)
        .toHaveAttribute(
            'aria-expanded',
            'true'
        );
        // await console.log(this.optionsCount.count());
        // await expect(this.m4chipLaptop).toBeVisible();
        await this.m4chipLaptop.click({force:true,timeout:30000});
        await expect(this.inStockText).toBeVisible();
        await this.confirmBtn.click();
    }

    async DetailsFillUp(){

        await this.instituteField.click();
        await this.instituteField.fill('VGEC');
        await this.pincodeField.click();
        await this.pincodeField.fill('382424');
        await this.cityField.click();
        await this.cityField.fill('Ahmedabad');
        await this.stateField.click();
        await this.stateField.fill('Gujarat');
        await this.countryOption.selectOption('99');
        await this.addressField.click();
        await this.addressField.fill('near ONGC circle');
        await this.firstNameField.click();
        await this.firstNameField.fill('Dhruv');
        await this.lastNameField.click();
        await this.lastNameField.fill('Songara');
        await this.emailField.click();
        await this.emailField.fill('dhruv123@gmail.com');
        await this.phoneField.click();
        await this.phoneField.fill('9999999999');
        await this.passField.click();
        await this.passField.fill('Dhruv@123');
        await this.confirmPassField.click();
        await this.confirmPassField.fill('Dhruv@123');
        await this.registerBtn.click();
        await expect(this.textMsg).toContainText('Registration Failed. Please try again.');
    }
}

