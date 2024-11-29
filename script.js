function generateRandomNumber(num){
 return   Math.floor(Math.random()* num,);
}

const myMessage= {
    goodMessage:['Your going to have a great day', 'This will be your year', 'Everything will work out'],
    badMessage:['This is the end','Sorry try again', 'It wont work out'],
    mystery:['Look on the inside', 'What you seek you might find', 'the sun shines but does not touch everything']
}

let allMessage=[]

for (let message in myMessage){
    allMessage= allMessage.concat(myMessage[message])
}
let randomIndex= generateRandomNumber(allMessage.length)
let randomMessage=allMessage[randomIndex]

console.log(randomMessage)
