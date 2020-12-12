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

    totalCats++
    console.log(totalCats)
    document.getElementById('cat-number').innerHTML = `${totalCats}`
}

function buyUpgrade(userChoice) {
    if (userChoice == "treats"
        && totalCats >= clickUpgrades.treats.price) {
        clickUpgrades.treats.quantity++
        totalCats -= clickUpgrades.treats.price
    } else if (userChoice == "laser") {
        clickUpgrades.laser.quantity++
    } else if (userChoice == "crazyCatLady") {

    }



    // if (totalCats >= clickUpgrades.userChoice.price) {
    //     clickUpgrades.treats.quantity++
    // }


    // console.log("purchased")
    update()
}

