console.log("script running");

// total cost of items in cart (in cents)
let totalInCents = 0;

// creating a variable, appleButton, setting it equal to id=apple
// part 1, who
const appleButton = document.querySelector("#apple");
const shoppingList = document.querySelector("#shopping-cart");
// part 2, what
console.log(appleButton);
let appleCount = 0;

const addApple = () => {
  shoppingList.innerHTML += '<p>Apple</p>';
  totalInCents += 75;
  console.log(totalInCents);
  updateTotal();
  appleCount += 1;
  console.log(appleCount);
};

// part 3, when
appleButton.addEventListener("click", addApple);


// creating a variable, bananaButon, setting it equal to id=banana
const bananaButton = document.querySelector("#banana");
let bananaCount = 0;
const addBanana = () => {
  shoppingList.innerHTML += '<p>Banana</p>' ;
  totalInCents += 30;
  console.log(totalInCents);
  updateTotal();
  bananaCount += 1;
  console.log(bananaCount);
};
bananaButton.addEventListener("click", addBanana);


// creating a variable, mangoButton, setting it equal to id=mango
const mangoButton = document.querySelector("#mango");
let mangoCount = 0;
const addMango = () => {
  shoppingList.innerHTML += '<p>Mango</p>' ;
  totalInCents += 125;
  console.log(totalInCents);
  updateTotal();
  mangoCount += 1;
  console.log(mangoCount);
};
mangoButton.addEventListener("click", addMango);


// creating a variable, pineappleButton, setting it equal to id=mango
const pineappleButton = document.querySelector("#pineapple");
pineappleCount = 0;
const addPineapple = () => {
  shoppingList.innerHTML += '<p>Pineapple</p>' ;
  totalInCents += 150;
  console.log(totalInCents);
  updateTotal();
  pineappleCount += 1;
  console.log(pineappleCount);
};
pineappleButton.addEventListener("click", addPineapple);


// variable for cost of items in cart
const total = document.querySelector("#total-span")
const updateTotal = () => {
  total.innerHTML = totalInCents/100;
}
// when should total update


