let bagItemObjects;
onLoad();

function onLoad(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.bag-summary');
  let totalItems = bagItemObjects.length;
  let totalPrice= 0;
  let totalDiscount = 0;
  const convenienceFee = 99;
  let finalPrice = 0;

  bagItemObjects.forEach(bagItem => {
    totalPrice += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  finalPrice += totalPrice - totalDiscount + convenienceFee;

  bagSummaryElement.innerHTML = `
  <div class="bag-details-container">
      <div class="price-header">
        PRICE DETAILS (${totalItems} Items)
      </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalPrice}</span>
      </div>
              
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
      </div>
              
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ ${convenienceFee}</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${finalPrice}</span>
      </div>
  </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button>
  `;
}

function loadBagItemObjects(){
  console.log(bagItems);
  bagItemObjects = bagItems.map(itemId => {
    for(let i=0; i<items.length; i++){
      if(itemId == items[i].id) return items[i];
    }
  });
  console.log(bagItemObjects);
}

function generateItemInHTML(item){
  return `
  <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="${item.item_image}">
    </div>

    <div class="item-right-part">
      <div class="company">${item.company_name}</div>

      <div class="item-name">${item.item_name}</div>

      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>

      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>

      <div class="delivery-details">
        Delivery by <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>
  
    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>
  `;
}

function displayBagItems() {
  let itemsContainer = document.querySelector('.bag-items-container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItem => {
    innerHTML += generateItemInHTML(bagItem);
  });
  itemsContainer.innerHTML = innerHTML;
}

function removeFromBag(itemId){
  bagItems = bagItems.filter(itemIdInBag => itemIdInBag != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}