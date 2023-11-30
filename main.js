let btn = document.querySelector('#btn')
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')

quotes =[
   {
    quote: `'You don't win alone. That's just how it is.'`,
    person: ` —Tobio Kageyama `
   },
   {
    quote : ` “Do you need a reason to not want to lose?”`,
    person : `-Hinta Shoyo`
   },
   {
    quote : ` “We will never win if we don't believe we can.”  `,
    person : `Sawamura Daichi`
   },
   {
    quote :`Motivation? What more do you need than pride!`,
    person : `Yamaguchi Tadashi `
   },
   {
    quote: `Being weak means that there is room to grow.`,
    person: `Takeda Ittetsu `
   },
   {
    quote: `I am built upon the small things I do every day, and the end results are no more than a byproduct of that.`,
    person:`Kita Shinsuke`
   },
   {
    quote:`“Someone who can't see the opponent standing right in front of him, can't defeat the opponent that lies beyond!`,
    person:`Iwaizumi Hajime`
   },
   {
    quote:`Guys, don't freak out! If we fall, fall forward!`,
    person:`Nishinoya Yuu`
   },
   {
    quote:`To stand on the court with the monsters`,
    person:`oikwa`
   },
]
btn.addEventListener('click', function(){
    let random =Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
