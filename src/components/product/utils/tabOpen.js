export const productsDisplay =(evt, cityName) =>{
  // Declare all variables
  var i, productcontent, productlinks;

  // Get all elements with class="productcontent" and hide them
  productcontent = document.getElementsByClassName("productcontent");
  for (i = 0; i < productcontent.length; i++) {
    productcontent[i].style.display = "none";
  }

  // Get all elements with class="productlinks" and remove the class "active"
  productlinks = document.getElementsByClassName("productlinks");
  for (i = 0; i < productlinks.length; i++) {
    productlinks[i].className = productlinks[i].className.replace("active", " ");
  }

  // Show the current product, and add an "active" class to the button that opened the product
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}