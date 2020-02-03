//Root element
const body = document.querySelector("body")

const wrapper = document.createElement("div")
wrapper.className = "wrapper"
body.appendChild(wrapper)

//Nav-bar
const nav = document.createElement("nav")
nav.className = "nav"
body.prepend(nav)
const cartBtn = document.createElement("button")
cartBtn.className = "cartBtn"
cartBtn.textContent = "Varukorg"
nav.appendChild(cartBtn)

//ShoppingcartBtn template
const shoppigCart = document.createElement("div")
shoppigCart.className = "shoppingCart"
body.appendChild(shoppigCart)

const shoppigCartConainer = document.createElement("div")
shoppigCartConainer.className = "shoppingCartContainer"
shoppigCart.appendChild(shoppigCartConainer)

//Product container
const productContainer = document.createElement("div")
productContainer.className = "productContainer"
wrapper.appendChild(productContainer)

//Product template
const product = document.createElement("div")
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
name.textContent = "Name"
product.appendChild(name)

const price = document.createElement("h3")
price.className = "productPrice"
price.textContent = "99.9€"
product.appendChild(price)

//Count picker template
const countContainer = document.createElement("div")
countContainer.className = "countContainer"
product.appendChild(countContainer)
const minus = document.createElement("button")
minus.className = "countContainer__minus"
minus.textContent = "-"
countContainer.appendChild(minus)
const count = document.createElement("p")
count.className = "countContainer__count"
count.textContent = "5 st."
countContainer.appendChild(count)
const plus = document.createElement("button")
plus.className = "countContainer__plus"
plus.textContent = "+"
countContainer.appendChild(plus)
const addBtn = document.createElement("button")
addBtn.className = "addBtn"
addBtn.textContent = "Lägg till i varukorg"
product.appendChild(addBtn)

//Clonar produkter
for (let i = 0; i < 12; i++) {
    const cloneProduct = product.cloneNode(true)
    productContainer.appendChild(cloneProduct)
}
const products = document.querySelectorAll(".product img")
//JSON handler
fetch("product.json")
    .then(response => {
        return response.json()
    })
    .then(myJson => {
        for (let i = 0; i < myJson.products.length; i++) {
            console.log(myJson.products[i])
            products[i].src = myJson.products[i].img
        }
    })
