const cardContainer = document.querySelector("#Container")

const CardList = [
    {name:"Браслет", price:5, img:"images/bracelet.png"},
    {name:"Брелок Фітгет", price:100, img:"images/fidget.jpeg"},
    {name:"Клавіатура", price:250, img:"images/keyboard.jpg"},
    {name:"Брелок", price:30, img:"images/keychain.png"},
    {name:"Кружка", price:130, img:"images/cup.png"},
    {name:"Подушка", price:130, img:"images/pillow.jpg"},
    {name:"Картина", price:190, img:"images/picture.png"},
    {name:"Мишка", price:200, img:"images/mouse.jpg"},
    {name:"Rgb Лента", price:300, img:"images/rgb.jpg"},
    {name:"Шопер", price:25, img:"images/shopping.png"},
    {name:"Парні значки", price:35, img:"images/pins.png"},
    {name:"Наушники", price:290, img:"images/headphones.jpg"},
]

let basket = JSON.parse(localStorage.getItem("LG_basket"))

if (!basket) {
   basket = []
   localStorage.setItem("LG_basket", JSON.stringify(basket))
}

function renderCard (list) {
    const card = document.createElement("div")
    card.className = "card"

    const img = document.createElement("img")
    img.src = list.img

    const interface = document.createElement("div")
    interface.className = "interface"

    const info = document.createElement("div")
    info.className = "info"

    const nameLabel = document.createElement("h2")
    nameLabel.textContent = list.name

    const priseLabel = document.createElement("h3")
    priseLabel.textContent = `Ціна:${list.price}`

    const btn = document.createElement("button")
    btn.textContent = "Замовити"

    btn.onclick = function () {
        basket.push({
            name: list.name,
            price: list.price
        })
        localStorage.setItem("LG_basket", JSON.stringify(basket))
        alert("Товар додано до корзини")
    }

    card.append(img, interface)
    interface.append(info, btn)
    info.append(nameLabel, priseLabel)

    return card
}

CardList.forEach(id => {
    const createCard = renderCard(id)
    cardContainer.append(createCard)
})