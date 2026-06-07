const cardContainer = document.querySelector("#Container")
const bottomline = document.querySelector(".bottomline")

let basket = JSON.parse(localStorage.getItem("LG_basket"))

if (!basket) {
   basket = []
   localStorage.setItem("LG_basket", JSON.stringify(basket))
}

function renderCard () {
    cardContainer.innerHTML = ""
    bottomline.innerHTML = ""

    if (basket.length === 0) {
        const message = document.createElement("p")
        message.className = "message"
        message.textContent = "Корзина пуста :("
        cardContainer.append(message)
        return
    }

    const orderAll = document.createElement("button")
    const deleteAll = document.createElement("button")

    orderAll.className = "orderAll"
    deleteAll.className = "deleteAll"

    orderAll.textContent = "Замовити все"
    deleteAll.textContent = "Видалити все"

    orderAll.onclick = function () {
        const Agreed =  confirm("Ви точно хочете замовити все?")
        if (Agreed) {
            alert("Всі товари будуть доставлені")
            basket = []
            localStorage.clear()
            renderCard()
        }
    }

    deleteAll.onclick = function () {
        const Agreed =  confirm("Ви точно хочете видалити все?")
        if (Agreed) {
            alert("Всі товари видалені")
            basket = []
            localStorage.clear()
            renderCard()
        }
    }

    bottomline.append(orderAll, deleteAll)

    basket.forEach((element, index) => {
        const card = document.createElement("div")
        card.className = "card"

        const info = document.createElement("div")
        info.className = "info"

        const interface = document.createElement("div")
        interface.className = "interface"
        
        const nameLabel = document.createElement("h2")
        nameLabel.textContent = element.name

        const priceLabel = document.createElement("h3")
        priceLabel.textContent = `Ціна:${element.price}`

        const orderBtn = document.createElement("button")
        orderBtn.className = "order"
        orderBtn.textContent = "Замовити"
        orderBtn.onclick = function () {
            basket.splice(index, 1)
            localStorage.setItem("LG_basket", JSON.stringify(basket))
            alert("Товар успішно буде доставлений до ближайшої локації")
            renderCard()
        }

        const deleteBtn = document.createElement("button")
        deleteBtn.className = "delete"
        deleteBtn.textContent = "Видалити"
        deleteBtn.onclick = function () {
            const Agreed = confirm("Ви впевнені, що хочете видалити цей товар?")
            if (Agreed) {
                alert("Товар видалено")
                basket.splice(index, 1)
                localStorage.setItem("LG_basket", JSON.stringify(basket))
                renderCard()
            }
        }

        card.append(info, interface)
        info.append(nameLabel, priceLabel)
        interface.append(orderBtn, deleteBtn)
        cardContainer.append(card)
    })
}

renderCard()