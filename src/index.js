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
  target.parentElement.parentElement.remove();
  calculateAll();


}

// ITERATION 5

function createProduct() {
  let productName = document.getElementById('productName').value;
  let productPrice = document.getElementById('productPrice').value;
  let row = document.querySelector('.product');
  let table = document.getElementById('cart');
  let newRow = row.cloneNode(true);
  table.appendChild(newRow);

  let newProduct = newRow.querySelector('.name span');
  newProduct.innerHTML = productName;
  let newPrice = newRow.querySelector('.price span');
  newPrice.innerHTML = productPrice;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = document.querySelectorAll('button.btn-remove');
  for (const removeButton of removeButtons) {
    removeButton.addEventListener('click', removeProduct);
  }

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});







