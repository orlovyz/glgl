let Cart = []
document.addEventListener("DOMContentLoaded", function() { 
  fillStorageTable(storageMock);
});

function fillStorageTable(items) {
    let storageTable = document.getElementById('storage');
    
      items.forEach(e => {
      let itemTR = document.createElement('tr');
      itemTR.innerHTML = `<td>${e.id}</td><td>${e.name}</td><td>${e.price}</td><td>${e.amount}</td>`;
      storageTable.append(itemTR);
      itemTR.addEventListener('click', addToCart);
      
      
      
});
}
  
  function addToCart() {
      let cartTR = document.createElement("tr");
      cartTR.innerHTML = `<td>${this.childNodes[1].textContent}</td><td>${this.childNodes[2].textContent}</td><td>${this.childNodes[3].textContent}</td>`;
     document.getElementById('cart').append(cartTR);
}