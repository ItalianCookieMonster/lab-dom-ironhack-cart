// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let valuePrice = price.innerHTML;
  let valueQuantity = quantity.value;
  let subT = valuePrice * valueQuantity;

  let subtotal = product.querySelector('.subtotal span');
  var subValue = subtotal.innerHTML = subT;

  return subValue;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let totValue = 0;
  let products = document.getElementsByClassName('product');
  for (const prod of products){
    updateSubtotal(prod); 
    let subValue = updateSubtotal(prod);
    totValue += subValue;
  }
  

  // ITERATION 3
  //... your code goes here
  let total = document.querySelector('#total-value span');
  total.textContent = totValue; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
;


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('button.btn-remove');
  for (const removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }
});







