let bagItems;
onLoad();

function onLoad() {
  let itemsInBag = localStorage.getItem('bagItems');
  bagItems = itemsInBag ? JSON.parse(itemsInBag) : [];
  displayItems();
  displayBagIcon();
}

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCount = document.querySelector('.count-bag-item');
  if(bagItems.length > 0) { 
    bagItemCount.innerText = bagItems.length;
    bagItemCount.style.visibility = 'visible';
  }
  else bagItemCount.style.visibility = 'hidden';
}

function displayItems() {
  let itemsContainer = document.querySelector('.items-container');
  let innerHTML = '';

  if(!itemsContainer) return;

  items.forEach(item => {
    innerHTML += 
    `<div class="item-container">
    <img class="item-img" src="${item.item_image}" alt="ear-rings-item_image">
    <div class="rating">
      ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
    </div>
    <div class="brand">${item.company_name}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="disnoOfReviews">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="bag-btn" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`
  });

  itemsContainer.innerHTML = innerHTML;
}

function search_box(){
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let temp = document.getElementsByClassName('item');

  for(let i=0; i<temp.length; i++){
    if(!temp[i].innerHTML.toLowerCase().includes(input)) temp[i].style.display = "none";
    else temp[i].style.display = "list-item";
  }
}
