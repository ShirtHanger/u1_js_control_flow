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

let dayOfWeek = 'Tuesday'

if (dayOfWeek === 'Tuesday') {
    console.log("Class is in session!")
} else if (dayOfWeek === 'Saturday') {
    console.log("It's saturday! Party on!")
} else {
    console.log("Please enter another day")
}
 // => "Class is in session!"

 /* Independent practice
 Basically, if your cash is equal to cat's price, console log "You can buy a cat!
 If mor or less, print the difference and say you can/can't */

const yourMoney = 200
const catPrice = 100


if (yourMoney === catPrice) {
    console.log(`You have just enough to buy a cat!`)
} else if (yourMoney > catPrice) {
    console.log(`You can buy a cat, you will have $${yourMoney - catPrice} left over`)
} else {
    console.log(`You need $${catPrice - yourMoney} more dollars :(`)
}


// Multiple conditions

age = 117

// And (&&), both conditions must be met for block to run

if (yearsAlivagee < 20 && age >= 13) {
    console.log("You are a teenager")
} else {
    console.log("You're not a teen")
}

// or (||), one or the other condition must be met for the block to run

if (age >= 20 || age < 13) {
    console.log("You aren't a teenager")
} else {
    console.log("You are a teen")
}

dayOfWeek = 'tuesday'

if (dayofWeek != 'saturday' || dayOfWeek != 'sunday') {
    console.log("Its a weekday! Get to class!")
} else {
    
}

// Ternary Operators
// (condition) ? ifTrue : ifFalse
// if/else conditions written in a SINGLE line, not as strong, clean and readable
// No else ifs can be used

let userLoggedIn = true

userLoggedIn ? console.log('Welcome!') : console.log('Please log in')

// This is much simpler than this

if (userLoggedIn = true) {
    cconsole.log('Welcome!')
  } else {
    console.log('Please log in')
  }




/* Switch Statements */

// Switch statements are conditions that work with pre-defined inputs that are expected.
// Attack button, item button, flee button in RPGs for example
// based on === equality: 
// Same logic as if/else
// Case -> action -> break

let food = 'fish'

// case is like "If" or "Else if"
// default is like "Else"

switch (food) {
    
    case 'chicken': // Case is what condition is being searched for, if met, below code runs
        console.log('Ill have the Chicken Parmesean')
        break // Break skips entire code block when reached
    case 'steak':
        console.log('The steak please, medium rare')
        break
    case 'fish':
        console.log('I think Ill try the Salmon')
        break
    case 'vegan':
        console.log('Ill have a salad')
        break
    default: // Works like else, catch all if no conditoons are met
        console.log('Please enter a valid entreee')
}