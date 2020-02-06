//Root element
const body = document.querySelector("body")

const wrapper = document.createElement("div")
wrapper.className = "wrapper"
body.appendChild(wrapper)

//Nav-bar
const nav = document.createElement("nav")
nav.className = "nav"
body.prepend(nav)

//ShoppingcartBtn template
const cartBtn = document.createElement("button")
cartBtn.className = "cartBtn"
cartBtn.textContent = "Varukorg"
nav.appendChild(cartBtn)
//Logiken
cartBtn.addEventListener("click", function() {
    shoppigCart.classList.add("displayFlex")
})

//ShoppingCart
const shoppigCart = document.createElement("div")
shoppigCart.className = "shoppingCart"
body.appendChild(shoppigCart)

const shoppigCartConainer = document.createElement("div")
shoppigCartConainer.className = "shoppingCartContainer"
shoppigCart.appendChild(shoppigCartConainer)

// Product template in cart
const productInCart = document.createElement("div")
productInCart.className = "productInCart"
shoppigCartConainer.appendChild(productInCart)

const productInCartImgWrapper = document.createElement("div")
productInCartImgWrapper.className = "productInCartImgWrapper"
productInCart.appendChild(productInCartImgWrapper)
//Logiken
productInCartImgWrapper.addEventListener("click", function() {
    shoppigCart.classList.remove("displayFlex")
})

const productInCartImgWrapperImg = document.createElement("img")
productInCartImgWrapperImg.className = "productInCartImgWrapperImg"
productInCartImgWrapperImg.src =
    "https://images.unsplash.com/photo-1566719835718-56b15f742ae0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1000"
productInCartImgWrapper.appendChild(productInCartImgWrapperImg)

const productInCartName = document.createElement("h3")
productInCartName.className = "productInCartName"
productInCartName.textContent = "Name"
productInCart.appendChild(productInCartName)

const countBtn = document.createElement("div")
countBtn.className = "countBtn"
productInCart.appendChild(countBtn)

const countBtnMinus = document.createElement("button")
countBtnMinus.className = "countBtnMinus"
countBtnMinus.textContent = "-"
countBtn.appendChild(countBtnMinus)

const countBtnCount = document.createElement("p")
countBtnCount.className = "countBtnCount"
countBtnCount.textContent = 1
countBtn.appendChild(countBtnCount)

const countBtnPlus = document.createElement("button")
countBtnPlus.className = "countBtnPlus"
countBtnPlus.textContent = "+"
countBtn.appendChild(countBtnPlus)

//Logiken Varukorg
priceCart = 15
countCart = 1
countBtnPlus.addEventListener("click", function() {
    // console.log(countCart)
    totalProductprice.textContent = priceCart * countCart
    countBtnCount.textContent = countCart += 1
})
countBtnMinus.addEventListener("click", function() {
    // console.log(countCart)
    countBtnCount.textContent = countCart -= 1
})

const totalProductprice = document.createElement("p")
totalProductprice.className = "totalProductprice"
totalProductprice.textContent = 15
productInCart.appendChild(totalProductprice)

const deleteBtn = document.createElement("button")
deleteBtn.className = "deleteBtn"
deleteBtn.textContent = "X"
productInCart.appendChild(deleteBtn)

//Product container
const productContainer = document.createElement("div")
productContainer.className = "productContainer"
wrapper.appendChild(productContainer)

const pricee = 15
//Clonar produkter
for (let i = 0; i < 12; i++) {
    //Product template
    const product = document.createElement("div").cloneNode(true)
    product.className = "product"

    const imgWrapper = document.createElement("div")
    imgWrapper.className = "productImgWrapper"
    product.appendChild(imgWrapper)

    const img = document.createElement("img")
    img.className = "productImgWrapper__img"
    // img.src = "https://source.unsplash.com/1000x900/?food, purple"
    imgWrapper.appendChild(img)

    const name = document.createElement("h1")
    name.className = "productName"
    //name.textContent = "Name"
    product.appendChild(name)

    const price = document.createElement("h3")
    price.className = "productPrice"
    // price.textContent = "99.9€"
    product.appendChild(price)

    //Count picker template
    const countContainer = document.createElement("div")
    countContainer.className = "countContainer"
    product.appendChild(countContainer)
    const minus = document.createElement("button")
    minus.className = "countContainer__minus"
    minus.textContent = "-"
    countContainer.appendChild(minus)

    let count = 0
    let countText = document.createElement("p")
    countText.className = "countContainer__count"
    countText.textContent = count + " st."
    countContainer.appendChild(countText)

    const plus = document.createElement("button")
    plus.className = "countContainer__plus"
    plus.textContent = "+"
    countContainer.appendChild(plus)

    const addBtn = document.createElement("button")
    addBtn.className = "addBtn"
    addBtn.textContent = "Lägg till i varukorg"
    product.appendChild(addBtn)

    productContainer.appendChild(product)

    plus.addEventListener("click", function() {
        countText.textContent = count += 1
        // price.textContent = price * count
        console.log("plus")
    })
    minus.addEventListener("click", function() {
        console.log("minus")
        countText.textContent = count -= 1
    })
}
const productsImg = document.querySelectorAll(".product img")
const productsName = document.querySelectorAll(".product h1")
const productsPrice = document.querySelectorAll(".product h3")
//JSON handler
fetch("product.json")
    .then(response => {
        return response.json()
    })
    .then(myJson => {
        for (let i = 0; i < myJson.products.length; i++) {
            //console.log(myJson.products[i].name)
            productsImg[i].src = myJson.products[i].img
            //console.log(productsName)
            productsName[i].textContent = myJson.products[i].name
            //console.log(productsPrice)
            productsPrice[i].textContent = myJson.products[i].price
        }
    })
