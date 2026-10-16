import { test, expect} from '@playwright/test';

test('Testing inbuilt playwright Loactor stratergies',async({ page })=>{

    await page.goto("https://demowebshop.tricentis.com/");

   const actualTitle=await page.title();
   console.log(actualTitle);
   expect(actualTitle).toBe("Demo Web Shop");

   //getByRole

   const Register= page.getByRole('link',{name:'Register'});
   await Register.click();

   const FirstName=page.getByLabel('First name:');
   const LastName=page.getByLabel('Last name:');
   const Email=page.getByLabel('Email:');
   await FirstName.fill("Madhu");
   await LastName.fill("Sahu");
  await  Email.fill("madhusmithap@gmail.com");
 const genderM = page.getByRole('radio', { name: 'Male',exact :true });
await genderM.check();



  









});