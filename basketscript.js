const cardContainer = document.querySelector("#Container")

let basket = JSON.parse(localStorage.getItem("LG_basket"))

if (!basket) {
   basket = []
   localStorage.setItem("LG_basket", JSON.stringify(basket))
}

function renderCard () {
    cardContainer.innerHTML = ""

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