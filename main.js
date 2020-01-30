//Root element
const body = document.querySelector("body")
console.log(body)

const wrapper = document.createElement("div")
wrapper.className = "wrapper"
body.appendChild(wrapper)

const renderDiv = document.createElement("div")
renderDiv.className = "renderDiv"
wrapper.appendChild(renderDiv)

//Skapar upp en produkt mall
const product = document.createElement("div")
product.className = "productDiv"

const imgWrapper = document.createElement("div")
imgWrapper.className = "productImgWrapper"
product.appendChild(imgWrapper)

const img = document.createElement("img")
img.className = "productImgWrapper__img"
imgWrapper.appendChild(img)

const name = document.createElement("h1")
name.className = "productName"
name.textContent = "Name"
product.appendChild(name)

const price = document.createElement("h3")
price.className = "productPrice"
price.textContent = "99.9€"
product.appendChild(price)

const countContainer = document.createElement("div")
countContainer.className = "countContainer"
const minus = document.createElement("div")
minus.className = "count__minus"
const count = document.createElement("p")
count.className = "count"
const plus = document.createElement("div")
plus.className = "count__plus"

//Clonar produkter
for (let i = 0; i < 10; i++) {
    const cloneProduct = product.cloneNode(true)
    renderDiv.appendChild(cloneProduct)
}
