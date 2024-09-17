// If will ONLY run a block of code if the conditions have been met (truthy)
// If not, it is skipped
// Else can be added at the end to be a catch-all for if no conditions are met

// if () {}

if (true) {
    console.log('Hello World!')
  }
  
let age = 113

if (age >= 18) {
    console.log("You can vote!")
} else {
    console.log("Enjoy another Trump term!")
}

// else if means "If the previous condition isn't met, check this"
// We can do as many as we want!
// else if is skipped alltogether if the above condition was met

const dayOfWeek = 'Tuesday'

if (dayOfWeek === 'Tuesday') {
    console.log("Class is in session!")
} else if (dayOfWeek === 'Saturday') {
    console.log("It's saturday! Party on!")
} else {
    console.log("Please enter another day")
}
 // => "Class is in session!"

 /* A bit of practice */

const yourMoney = 200
const catPrice = 100


if (yourMoney === catPrice) {
    console.log(`You have just enough to buy a cat!`)
} else if (yourMoney > catPrice) {
    console.log(`You can buy a cat, you will have $${yourMoney - catPrice} left over`)
} else {
    console.log(`You need $${catPrice - yourMoney} more dollars :(`)
}