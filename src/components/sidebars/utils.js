export function openCart() {
    document.getElementById("mycart").style.width = "400px";
    document.getElementById("mybutton").style.marginRight = "400px";
    document.getElementById("main", "content").style.backgroundColor = "white";
  }
export function closeCart() {
    document.getElementById("mycart").style.width = "0";
    document.getElementById("mybutton").style.marginRight = "0";
    document.getElementById("main").style.backgroundColor = "white";
  }