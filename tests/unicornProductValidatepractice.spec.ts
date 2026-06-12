// import {test} from "@playwright/test";
// import {UnicornHome} from "../pages/UnicornHome";
// import {IphoneInfoPage} from "../pages/IphoneInfo";
// import {AirpodInfoPage } from "../pages/airpodInfo";
// import {CartPage} from "../pages/CartPage";
// import {StudentOffer} from "../pages/studentOffer";
// import dataFile from "../test-data/dataFile.json"

// let isLoggedIn = false;
// let productPage: UnicornHome;
// let cartPage: CartPage;
// let studentOffer: StudentOffer;

// test.only("Student Offer flow (while staying logged out))",async ({page,browserName})=>{

//     studentOffer = new StudentOffer(page);
//     productPage = new UnicornHome(page);

//     //student offer flow 
//     test.slow(browserName === 'chromium');
//     await productPage.unicornURL();
//     await productPage.pageCheck();
//     await studentOffer.goToStudentSection();
//     await studentOffer.chooseMac();
//     await studentOffer.selectM4Category();
//     await studentOffer.selectM4Laptop();
//     await studentOffer.DetailsFillUp();
// });

// test.describe("Logged-in User flows", () =>{
        
//     test.describe.configure({ mode: 'serial' });
//     test.beforeEach(async ({page})=>{

//         productPage = new UnicornHome(page);
//         cartPage = new CartPage(page);

//         //page launch
//         await productPage.unicornURL();
//         await productPage.pageCheck();
//         // await productPage.login(dataFile.login.email,dataFile.login.password);

//         if (!isLoggedIn) {

//             await productPage.login(
//                 dataFile.login.email,
//                 dataFile.login.password
//             );

//             await page.context().storageState({
//                 path: 'playwright/.auth/user.json'
//             });

//             isLoggedIn = true;
//         }
//     });

//     test ("validate iphone 17 device search", async ({page}) => {

//         const iphoneInfo = new IphoneInfoPage(page);

//         //product selection
//         // await productPage.searchProduct('iphone 17');
//         await productPage.searchProduct(dataFile.searchItems.mobile);
//         await iphoneInfo.verifyPageStability();
//         await iphoneInfo.productClick();
//         await iphoneInfo.mrpVisibilityCheck();
//         await iphoneInfo.titleCheck();
//         await iphoneInfo.colorSelection();
//         await iphoneInfo.storageSelection();
//         await iphoneInfo.addToCart();

//         //dealing with cart
//         // await cartPage.successfulAddtoCartCheck();
//         await cartPage.cartButtonClick();
//         await cartPage.proceedcheckOut();
//         await cartPage.orderDetailsFillUp(dataFile.orderDetails.firstname, dataFile.orderDetails.lastname, dataFile.orderDetails.email, dataFile.orderDetails.mobile, dataFile.orderDetails.address, dataFile.orderDetails.city, dataFile.orderDetails.pincode, dataFile.orderDetails.stateOption);
//         await cartPage.finalCheckout();
//     });

//     test ("validate airpods search", async ({browser})=>{

//         const context = await browser.newContext({
//             storageState: 'playwright/.auth/user.json'
//         });
//         const page = await context.newPage();

//         await productPage.unicornURL();
//         await productPage.pageCheck();
//         const airpodInfo = new AirpodInfoPage(page);

//         //product selection
//         // await productPage.searchProduct('airpods');
//         await productPage.searchProduct(dataFile.searchItems.earbuds);
//         await airpodInfo.verifyPageStability();
//         await airpodInfo.productClick();
//         await airpodInfo.mrpVisibilityCheck();
//         await airpodInfo.titleCheck();
//         await airpodInfo.addToCart();

//         //dealing with cart
//         // await cartPage.successfulAddtoCartCheck();
//         await cartPage.proceedcheckOut();
//         await cartPage.orderDetailsFillUp(dataFile.orderDetails.firstname, dataFile.orderDetails.lastname, dataFile.orderDetails.email, dataFile.orderDetails.mobile, dataFile.orderDetails.address, dataFile.orderDetails.city, dataFile.orderDetails.pincode, dataFile.orderDetails.stateOption);
//         await cartPage.finalCheckout();
//         await context.close();
//     }); 


//     test.afterEach(async ({}, testInfo) => {
//         console.log(`Test "${testInfo.title}" finished with status: ${testInfo.status}`);
//     });
// });