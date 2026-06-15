import {test} from "@playwright/test";
import {UnicornHome} from "../../pages/UnicornHome";
import {IphoneInfoPage} from "../../pages/IphoneInfo";
import {AirpodInfoPage } from "../../pages/airpodInfo";
import {CartPage} from "../../pages/CartPage";
import {StudentOffer} from "../../pages/studentOffer";
import { MacbookPage } from "../../pages/MacbookPage";
import { Logout } from "../../pages/Logout";
import dataFile from "../../test-data/dataFile.json"

let productPage: UnicornHome;
let cartPage: CartPage;
let studentOffer: StudentOffer;
 
 
// flow while staying logged out
// test("Student Offer flow (while staying logged out))",async ({page})=>{
 
//     studentOffer = new StudentOffer(page);
//     productPage = new UnicornHome(page);
 
//     //student offer flow
//     await productPage.unicornURL();
//     await productPage.pageCheck();
//     await studentOffer.goToStudentSection();
//     await studentOffer.chooseMac();
//     await studentOffer.selectM4Category();
//     await studentOffer.selectM4Laptop();
//     await studentOffer.DetailsFillUp();
// });
 
 
//flow with logged in account
test.describe("Logged-in User flows", () =>{
 
    test.describe.configure({ mode: 'serial' });

    //authentication
    test("authenticate", async ({ page }) => {
 
        const productPage = new UnicornHome(page);
        const logout = new Logout(page);
    
        await productPage.unicornURL();
        await productPage.pageCheck();

        // logout first if already logged in
        if (await logout.logoutBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
            console.log("User already logged in → logging out first");
            await logout.logout();
            await logout.verifyLogout();
        }

        await productPage.login(
            dataFile.login.email,
            dataFile.login.password
        );
    
        await page.context().storageState({
            path: "playwright/.auth/user.json"
        });
    }); 

    //use session
    test.use({
        storageState: 'playwright/.auth/user.json'
    });
 
    //beforeEach
    test.beforeEach(async ({ page }) => {
 
        productPage = new UnicornHome(page);
        cartPage = new CartPage(page);
 
        await productPage.unicornURL();
        await productPage.pageCheck();
    });
 
    //validate iphone 17 flow
    test ("validate iphone 17 device search", async ({page}) => {
 
        const iphoneInfo = new IphoneInfoPage(page);
 
        //product selection
        // await productPage.searchProduct('iphone 17');
        await productPage.searchProduct(dataFile.searchItems.mobile);
        await iphoneInfo.verifyPageStability();
        await iphoneInfo.productClick();
        await iphoneInfo.mrpVisibilityCheck();
        await iphoneInfo.titleCheck();
        // await iphoneInfo.colorSelection();
        // await iphoneInfo.storageSelection();
        await iphoneInfo.addToCart();
 
        //dealing with cart
        // await cartPage.successfulAddtoCartCheck();
        await cartPage.cartButtonClick();
        await cartPage.proceedcheckOut();
        await cartPage.orderDetailsFillUp(dataFile.orderDetails.firstname, dataFile.orderDetails.lastname, dataFile.orderDetails.email, dataFile.orderDetails.mobile, dataFile.orderDetails.address, dataFile.orderDetails.city, dataFile.orderDetails.pincode, dataFile.orderDetails.stateOption);
        await cartPage.finalCheckout();
    });
 
    //validate airpods search flow 
    test ("validate airpods search", async ({page})=>{
 
        const airpodInfo = new AirpodInfoPage(page);
 
        //product selection
        // await productPage.searchProduct('airpods');
        await productPage.searchProduct(dataFile.searchItems.earbuds);
        await airpodInfo.verifyPageStability();
        await airpodInfo.productClick();
        await airpodInfo.mrpVisibilityCheck();
        await airpodInfo.titleCheck();
        await airpodInfo.addToCart();
 
        //dealing with cart
        // await cartPage.successfulAddtoCartCheck();
        await cartPage.proceedcheckOut();
        await cartPage.orderDetailsFillUp(dataFile.orderDetails.firstname, dataFile.orderDetails.lastname, dataFile.orderDetails.email, dataFile.orderDetails.mobile, dataFile.orderDetails.address, dataFile.orderDetails.city, dataFile.orderDetails.pincode, dataFile.orderDetails.stateOption);
        await cartPage.finalCheckout();
    });
 
    //validate macbook negative flow 
    test("macbook out of stock flow", async ({page})=>{
 
       
        const macbookPage = new MacbookPage(page);
 
        await macbookPage.accountFlow();
        await macbookPage.macSearch();
        await macbookPage.notifyMe();
    });

    //logout from the account 
    test("Logout from account after all execution", async ({page})=>{

        const logout = new Logout(page);
        
        await logout.logout();
        await logout.verifyLogout();

    });
 
    //after Each
    test.afterEach(async ({}, testInfo) => {
        console.log(`Test "${testInfo.title}" finished with status: ${testInfo.status}`);
    });
});