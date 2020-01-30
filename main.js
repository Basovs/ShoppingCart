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
product.className = "product"

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

//Count picker template
const countContainer = document.createElement("div")
countContainer.className = "countContainer"
product.appendChild(countContainer)
const minus = document.createElement("div")
minus.className = "countContainer__minus"
minus.textContent = "-"
countContainer.appendChild(minus)
const count = document.createElement("p")
count.className = "countContainer__count"
count.textContent = "5 st."
countContainer.appendChild(count)
const plus = document.createElement("div")
plus.className = "countContainer__plus"
plus.textContent = "+"
countContainer.appendChild(plus)

//Clonar produkter
for (let i = 0; i < 10; i++) {
    const cloneProduct = product.cloneNode(true)
    renderDiv.appendChild(cloneProduct)
}
