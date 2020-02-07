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

//Product container
const productContainer = document.createElement("div")
productContainer.className = "productContainer"
wrapper.appendChild(productContainer)

const pricee = 15
let productCount = 12
//Clonar produkter
for (let i = 0; i < productCount; i++) {
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
    countText.innerText = count
    countContainer.appendChild(countText)

    const plus = document.createElement("button")
    plus.className = "countContainer__plus"
    plus.textContent = "+"
    countContainer.appendChild(plus)

    const addBtn = document.createElement("button")
    addBtn.className = "addBtn"
    addBtn.textContent = "Lägg till i varukorg"
    product.appendChild(addBtn)
    //Logiken för att lägga in produkter i varukorgen på klick
    addBtn.addEventListener("click", function() {
        // console.log(this.parentNode)

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
        productInCartImgWrapperImg.src = this.parentNode.firstChild.firstChild.src
        productInCartImgWrapper.appendChild(productInCartImgWrapperImg)

        const productInCartName = document.createElement("h3")
        productInCartName.className = "productInCartName"
        productInCartName.textContent = this.parentNode.childNodes[1].textContent
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
        countBtnCount.textContent = count
        countBtn.appendChild(countBtnCount)

        const countBtnPlus = document.createElement("button")
        countBtnPlus.className = "countBtnPlus"
        countBtnPlus.textContent = "+"
        countBtn.appendChild(countBtnPlus)

        //Logiken Varukorg
        console.log(this.parentNode.childNodes[3].childNodes[1].textContent)

        priceCart = 15
        countCart = countBtnCount.textContent
        countBtnPlus.addEventListener("click", function() {
            // console.log(countCart)

            countBtnCount.textContent = countCart -= 1
            countBtnCount.textContent = countCart += 2
            console.log(countCart)

            // totalProductprice.textContent = priceCart * countCart
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
        //Logiken
        deleteBtn.addEventListener("click", function() {
            this.parentNode.remove()
        })
    })

    productContainer.appendChild(product)

    plus.addEventListener("click", function() {
        countText.textContent = count += 1
        // price.textContent = price * count
    })
    minus.addEventListener("click", function() {
        countText.textContent = count -= 1
    })
}

//Json handler
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
