let  add_to_cart = document.getElementsByClassName("cards_shopping");
for (let i = 0; i < add_to_cart.length; i++){

    add_to_cart[i].addEventListener("click",()=>{
        alert("Bạn đã thêm vào giỏ hàng");
    })
}