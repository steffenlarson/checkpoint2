let totalCats = 0

let clickUpgrades = {
    treats: {
        price: 1,
        quantity: 0,
        multiplier: 1
    },

    lazer: {
        price: 2,
        quantity: 0,
        multiplier: 3
    }
};



let autoUpgrades = {
    crazyCatLady: {
        price: 10,
        quantity: 0,
        multiplier: 2
    },

    fishOnALine: {
        price: 7,
        quantity: 0,
        multiplier: 3
    }
};


setInterval(update,
    1000)

function update() {
    console.log("Herro dere")
    document.getElementById('cat-number').innerHTML = `${totalCats}`

}

function count() {
    // let totalCats = document.getElementById('cat-number')
    totalCats++
    console.log(totalCats)
    document.getElementById('cat-number').innerHTML = `${totalCats}`
}

function purchase() {


}

function changePrice() {

}

function drawInventory() {

}

