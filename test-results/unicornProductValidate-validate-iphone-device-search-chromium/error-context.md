# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: unicornProductValidate.spec.ts >> validate iphone device search
- Location: tests/unicornProductValidate.spec.ts:6:5

# Error details

```
Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://shop.unicornstore.in/
Call log:
  - navigating to "https://shop.unicornstore.in/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e5]:
    - heading "Your connection is not private" [level=1] [ref=e6]
    - paragraph [ref=e7]:
      - text: Attackers might be trying to steal your information from
      - strong [ref=e8]: shop.unicornstore.in
      - text: (for example, passwords, messages or credit cards).
      - link "Learn more about this warning" [ref=e9] [cursor=pointer]:
        - /url: "#"
    - button "net::ERR_CERT_AUTHORITY_INVALID" [ref=e11]
  - generic [ref=e12]:
    - button "Back to safety" [ref=e13] [cursor=pointer]
    - button "Advanced" [ref=e14] [cursor=pointer]
```

# Test source

```ts
  1  | import {Page, Locator, expect} from "@playwright/test"
  2  | 
  3  | export class UnicornHome {
  4  |     
  5  |     page: Page;
  6  |     dealsCheck: Locator;
  7  |     productSearch: Locator;
  8  |     searchBar: Locator;
  9  |     searchtextbox: Locator;
  10 | 
  11 |     constructor( page:Page){
  12 |         
  13 |         this.page = page;
  14 |         this.dealsCheck = page.locator("//a[@routerlink='/deals-of-day']");
  15 |         this.productSearch = page.getByRole('button', { name: ' Search' });
  16 |         this.searchBar = page.locator("//input[@id='searchbar']"); 
  17 |         this.searchtextbox = page.getByRole('textbox', { name: 'I\'m Looking For' });
  18 |     }
  19 | 
  20 |     async unicornURL(){
> 21 |         await this.page.goto("https://shop.unicornstore.in/",{timeout:60000});
     |                         ^ Error: page.goto: net::ERR_CERT_AUTHORITY_INVALID at https://shop.unicornstore.in/
  22 |     }
  23 | 
  24 |     async pageCheck(){
  25 |         await expect(this.dealsCheck).toBeVisible();
  26 |     }
  27 | 
  28 |     async searchProduct(productName : string):Promise<void> {
  29 |         await this.productSearch.click();
  30 |         await this.searchBar.click();
  31 |         await this.searchtextbox.fill(productName);
  32 |         await this.searchtextbox.press("Enter");
  33 |     }
  34 | }
```