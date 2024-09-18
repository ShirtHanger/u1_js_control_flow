/* Looping through arrays */

// You can loop on each element in an array

const foods = ['tacos', 'burritos', 'pizza', 'soup', 'pasta', 
    'sushi', 'etoufee', 'ceviche', 'ramen', 
    'bbq chicken']

for (let i = 0; i < foods.length; i += 1) {
    console.log(`Let's have ${foods[i]} for dinner!`)
}

// Remember, list index starts at 0

console.log("----------------")

/* Simple for loop with array */

for (element of foods) {
    print(`Let's have ${element} for dinner!`)
}