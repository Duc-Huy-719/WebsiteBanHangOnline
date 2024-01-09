//--------------------------Menu-item--------------------------
const toP = document.querySelectorAll(".top")
window.addEventListener("scroll", function(){
    const X = this.pageYOffset;
    if(X>1){toP.classList.add("active")}
    else{
        toP.classList.remove("active")
    }
})
//------------------Menu-SLIDERBAR-CARTEGORY-------------------
const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
//----------------------PRODUCT-----------------------------
const bigImg = document.querySelector(".product-content-left-big-img img")
const smalImg = document.querySelectorAll(".product-content-left-small-img img")
smalImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

const baoquan = document.querySelector(".baoquan")
const gioithieu = document.querySelector(".gioithieu")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(gioithieu){
    gioithieu.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-gioithieu").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}
const butTon = document.querySelector(".product-content-right-bottom-top")
if(butTon){
    butTon.removeEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}