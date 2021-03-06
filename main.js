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

const closeBtn = document.createElement("button")
closeBtn.className = "closeBtn"
closeBtn.textContent = "X"
shoppigCartConainer.appendChild(closeBtn)
closeBtn.addEventListener("click", function() {
  shoppigCart.classList.remove("displayFlex")
})

const buyBtn = document.createElement("a")
buyBtn.className = "buyBtn"
buyBtn.textContent = "Beställ"
buyBtn.href = "kvitto.html"
shoppigCartConainer.appendChild(buyBtn)
//Logiken
/*buyBtn.addEventListener("click", function() {
    shoppigCart.classList.add("displayFlex")
})*/

const antProducts = document.createElement("h2")
antProducts.className = "buyBtn"
antProducts.textContent = "Antal produkter: "
shoppigCartConainer.appendChild(antProducts)

const totPrice = document.createElement("h2")
totPrice.className = "buyBtn"
totPrice.textContent = "Total: "
shoppigCartConainer.appendChild(totPrice)

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
    product.id = i

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

    let productArr = []
    let productObj = {}
    //Logiken för att lägga in produkter i varukorgen på klick
    addBtn.addEventListener("click", function(e) {
      if (count > 0) {
        // console.log(this.parentNode)
        const productId = this.parentElement.id
        const productAnt = this.parentElement.lastChild.previousSibling.firstChild.nextSibling.textContent
        const productImage = this.parentElement.firstElementChild.firstElementChild.getAttribute('src')
        const productName = this.parentElement.firstChild.nextSibling.textContent
        const productPrice = this.parentElement.firstChild.nextSibling.nextSibling.textContent
        console.log(productId)
        console.log(productAnt)
        productObj = {
          productId: productId,
          productAnt: productAnt,
          productImage: productImage,
          productName: productName,
          productPrice: productPrice 
        }
        //console.log('id: ' + this.parentElement.id)
        //console.log('Antal: ' + this.parentElement.lastChild.previousSibling.firstChild.nextSibling.textContent)
        this.disabled = true
        this.previousSibling.lastChild.disabled = true
        this.previousSibling.firstChild.disabled = true

        productArr.push(productObj)
        console.log(productArr)
        localStorage.setItem(`produkt${productId}`, JSON.stringify(productArr))

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
        //console.log(this.parentNode.childNodes[3].childNodes[1].textContent)

        //Total price in cart
        const totalProductprice = document.createElement("p")
        totalProductprice.className = "totalProductprice"
        totalProductprice.textContent = countBtnCount.textContent * 15
        productInCart.appendChild(totalProductprice)

        priceCart = 15
        countCart = countBtnCount.textContent
        countBtnPlus.addEventListener("click", function() {
            // console.log(countCart)

            countBtnCount.textContent = countCart -= 1
            countBtnCount.textContent = countCart += 2
            totalProductprice.textContent = countBtnCount.textContent * 15
            console.log(countCart)

            // totalProductprice.textContent = priceCart * countCart
        })
        countBtnMinus.addEventListener("click", function() {
            // console.log(countCart)
            if (countCart > 1) {
              countBtnCount.textContent = countCart -= 1
              totalProductprice.textContent = countBtnCount.textContent * 15
            }
        })

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "deleteBtn"
        deleteBtn.textContent = "X"
        productInCart.appendChild(deleteBtn)
        //Logiken
        deleteBtn.addEventListener("click", function() {
            this.parentNode.remove()
        })
      } else {
        alert('Du måste välja antal produkter')
      }
    })


    productContainer.appendChild(product)

    plus.addEventListener("click", function() {
        countText.textContent = count += 1
        // price.textContent = price * count
    })
    minus.addEventListener("click", function() {
      if(count > 0) {
        countText.textContent = count -= 1
      }
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
      //localStorage.setItem('data',JSON.stringify(myJson))

        for (let i = 0; i < myJson.products.length; i++) {
            //console.log(myJson.products[i].name)
            let kalle = myJson.products
            console.log(kalle)
            productsImg[i].src = myJson.products[i].product.img
            //console.log(productsName)
            productsName[i].textContent = myJson.products[i].product.name
            //console.log(productsPrice)
            productsPrice[i].textContent = myJson.products[i].product.price
        }
    })

    function updateUi(data){


    }