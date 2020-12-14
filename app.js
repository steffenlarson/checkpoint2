let totalCats = 0

let clickUpgrades = {

    treats: {
        price: 1,
        quantity: 0,
        multiplier: 1
    },

    laser: {
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


    document.getElementById('treat-price').innerHTML = `${VARIABLE}`
    document.getElementById('fish-price').innerHTML = `${VARIABLE}`
    document.getElementById('lady-price').innerHTML = `${VARIABLE}`
    document.getElementById('laser-price').innerHTML = `${VARIABLE}`
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
        clickUpgrades.treats.price * .2
    } else if (userChoice == "laser") {
        clickUpgrades.laser.quantity++
    } else if (userChoice == "crazyCatLady") {

    } else if (userChoice == "fishOnALine") {

    }



    // if (totalCats >= clickUpgrades.userChoice.price) {
    //     clickUpgrades.treats.quantity++
    // }


    // console.log("purchased")
    update()
}

