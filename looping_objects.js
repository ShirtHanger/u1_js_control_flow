             
/* Practice; Looping objects */

/* This is an array of objects */
 
const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

 for (element of wizards) {
     console.log(`${element.name} of ${element.house}`)
 }

console.log('-------------------')
console.log('-------------------')
console.log('-------------------')


// Now, how can we combine an if statement with a for loop to print only the names of Slytherins?

// The "Normal" answer

for(let i = 0; i < wizards.length; i++){
    if (wizards[i].house === 'Slytherin') {
        console.log(`${wizards[i].name} (The mighty!)`)
    } else {
        console.log(`[REDACTED] ${wizards[i].house} peasant`)   
    }
}

console.log('-------------------')
console.log('-------------------')
console.log('-------------------')

// (I personally dislike the normal way, I did it this way, simpler to read for me)

for (element of wizards) {
    if (element.house === 'Slytherin') {
        console.log(`${element.name} (The mighty!)`)
    } else {
        console.log(`[REDACTED] ${element.house} peasant`)  
    }
}