//1- assign random hunter 
//2- assign random location to each person & show their picture there


const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

// for (let i = 0; i < people; i++) {
//   let person = people[i]
// }


function assignVampireHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  // console.log(`random number`, randomNumber);
  let randomHunter = people[randomNumber]
  randomHunter.isHunter = true
  console.log('random hunter', randomHunter);
}


function personAtRandomLocation() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    // console.log('random number', randomNumber);
    let randomLocation = locations[randomNumber]
    person.location = randomLocation
    person.picture = document.getElementById(randomLocation)?.innerText
  })
  console.log(people)
}

// function attack() {
//   people.forEach(person => {
//     person.picture = '🦇'
//   }
// }

// document.getElementById(randomHunter)?.innerHTML = randomLocation()


// function drawPeopleAtLocations() {
// console.log('this is the people array', people)
//   locations.forEach(location => {

//     let filteredArray = people.filter(person => person.location == location
//     )
//     console.log(people.picture'')
//     console.log(filteredArray)
//     const personAtLocationElement = document.getElementById('🏣')
//     personAtLocationElement.innerText = people.picture''
//   })

// }

// Array.map(element => {
// return element.picture
// }) 
// read MDN docs on methods!!!!!!!

personAtRandomLocation()
// drawPeopleAtLocations()
assignVampireHunter()