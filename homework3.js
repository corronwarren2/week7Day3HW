//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Peoples {
    constructor(name, age){
    this.name = name
    this.age = age
}
    agingNormally=()=>{
        console.log(`${this.name} is old af, but he's aging normally`)
        this.age += 1
        console.log(`He's in denial that he's ${this.age}`)
    }   
    crazyAging=()=>{
            console.log(`${this.name} is young af, but she's aging at an alarming rate and refuses to go to the doctors!?`)
            this.age += 3
            console.log(`Oh great, you called the function and now she's ${this.age}`)
    }
    printInfo=()=>{
                console.log(`${this.name}, ${this.age}`)
    }
}
const aaron = new Peoples('Aaron', 29)
console.log(aaron.agingNormally())
const bridget = new Peoples('Bridget', 25)
console.log(bridget.crazyAging())
console.log(aaron.printInfo())
console.log(bridget.printInfo())





// =============Exercise #2 ============//

    // Create a Promised based function that will check a string to determine if it's length is greater than 10.
    // If the length is greater than ten console log "Big word". 
    // If the length of the string is less than 10 console log "Small word"

    const greater10 = (len) => {
        return new Promise((resolve, reject) => {
            if(len.length >= 10){
                resolve(true)
            }else{
                reject(false)
            }
    
        })
    }
    async function hellaWords(len){
        try {
            await greater10(len);
            console.log("This big son of a gun, leme tell ya, definitley bigger than 10 letters BIG WORD ");
        }catch (reject){
            console.log('lil word havin ass, no length havin ass SMALL WORD BRUH')
        }
    }
    console.log(hellaWords('YomyfellowProgrammers, what is popping?'))
    console.log(hellaWords('Yomy'))
   
    
    
    const bigWord = (goodBoy) => {
        console.log("This big son of a gun, leme tell ya, definitley bigger than 10 letters" + "BIG WORD " + goodBoy)
    }
    const lilWord = (badboy) => {
        console.log('lil word havin ass, no length havin ass SMALL WORD BRUH '+badboy)
    }
    const getDaWord = (len) => {
        words = prompt('Here are your options, 1. ENTER BIG WORD/WORDS  2. ENTER BABY WORD/WORDS.')
        greater10(len).then(bigWord()).catch(lilWord())
    }
    getDaWord()