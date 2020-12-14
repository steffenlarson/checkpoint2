let totalCats = 0

let clickUpgrades = {

    treats: {
        price: 1,
        quantity: 0,
        multiplier: 2
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


function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 1000);
    console.log('hi')
}



function update() {
    // console.log("Herro dere")
    document.getElementById('cat-number').innerHTML = `${totalCats}`


    let treatPrice = clickUpgrades.treats.price;
    let fishPrice = autoUpgrades.fishOnALine.price;
    let ladyPrice = autoUpgrades.crazyCatLady.price;
    let laserPrice = clickUpgrades.laser.price

    document.getElementById('treat-price').innerHTML = `${treatPrice}`
    document.getElementById('fish-price').innerHTML = `${fishPrice}`
    document.getElementById('lady-price').innerHTML = `${ladyPrice}`
    document.getElementById('laser-price').innerHTML = `${laserPrice}`


    let treatquantity = clickUpgrades.treats.quantity;
    let fishquantity = autoUpgrades.fishOnALine.quantity;
    let ladyquantity = autoUpgrades.crazyCatLady.quantity;
    let laserquantity = clickUpgrades.laser.quantity

    document.getElementById('treat-quantity').innerHTML = ` X ${treatquantity}`
    document.getElementById('fish-quantity').innerHTML = ` X ${fishquantity}`
    document.getElementById('lady-quantity').innerHTML = ` X ${ladyquantity}`
    document.getElementById('laser-quantity').innerHTML = ` X ${laserquantity}`

    // TODO change these to show what the upgrade does.
    let treatmultiplier = clickUpgrades.treats.multiplier;
    let fishmultiplier = autoUpgrades.fishOnALine.multiplier;
    let ladymultiplier = autoUpgrades.crazyCatLady.multiplier;
    let lasermultiplier = clickUpgrades.laser.multiplier

    document.getElementById('treat-adder').innerHTML = ` + ${treatmultiplier} per click`
    document.getElementById('fish-adder').innerHTML = ` + ${fishmultiplier} per second`
    document.getElementById('lady-adder').innerHTML = ` + ${ladymultiplier} per second`
    document.getElementById('laser-adder').innerHTML = ` + ${lasermultiplier} per click`

}

function count() {

    totalCats++

    let treatsQ = clickUpgrades.treats.quantity
    totalCats = totalCats + treatsQ
    let laserQ = clickUpgrades.laser.quantity
    totalCats = totalCats + laserQ * 10




    console.log(totalCats)
    document.getElementById('cat-number').innerHTML = `${totalCats}`
}

function buyUpgrade(userChoice) {
    if (userChoice == "treats"
        && totalCats >= clickUpgrades.treats.price) {
        clickUpgrades.treats.quantity++
        totalCats -= clickUpgrades.treats.price
        clickUpgrades.treats.price = clickUpgrades.treats.price * clickUpgrades.treats.multiplier
    } else if (userChoice == "laser"
        && totalCats >= clickUpgrades.laser.price) {
        clickUpgrades.laser.quantity++
        totalCats -= clickUpgrades.laser.price
        clickUpgrades.laser.price = clickUpgrades.laser.price * clickUpgrades.laser.multiplier
    } else if (userChoice == "crazyCatLady"
        && totalCats >= autoUpgrades.crazyCatLady.price) {
        autoUpgrades.crazyCatLady.quantity++
        totalCats -= autoUpgrades.crazyCatLady.price
        autoUpgrades.crazyCatLady.price = autoUpgrades.crazyCatLady.price * autoUpgrades.crazyCatLady.multiplier
    } else if (userChoice == "fishOnALine"
        && totalCats >= autoUpgrades.fishOnALine.price) {
        autoUpgrades.fishOnALine.quantity++
        totalCats -= autoUpgrades.fishOnALine.price
        autoUpgrades.fishOnALine.price = autoUpgrades.fishOnALine.price * autoUpgrades.fishOnALine.multiplier
    }





    // if (totalCats >= clickUpgrades.userChoice.price) {
    //     clickUpgrades.treats.quantity++
    // }


    // console.log("purchased")
    update()

}

function collectAutoUpgrades() {
    // let catLadyQuantity = autoUpgrades.crazyCatLady.quantity
    // let fishLineQuantity = autoUpgrades.fishOnALine.quantity
    // let catLadyMultiplier = autoUpgrades.crazyCatLady.multiplier
    // let fishLineMultiplier = autoUpgrades.fishOnALine.multiplier

    for (const key in autoUpgrades) {
        if (Object.hasOwnProperty.call(autoUpgrades, key)) {
            const element = autoUpgrades[key];
            console.log(element)
            totalCats = element.quantity * element.multiplier + totalCats
        }
    }
    // catLadyQuantity * catLadyMultiplier + totalCats
    // fishLineQuantity * fishLineMultiplier + totalCats

}

startInterval()