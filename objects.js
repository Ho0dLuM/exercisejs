var person = {
  firstName: 'Ho0dLuM', preferredName: 'Ho0dLuM', lastName: 'Hoshor',
}
console.log("Hello, my name is " + person['firstName'] + " " + person['lastName'] + " or just " + person['preferredName'])


// setter
person.age = 6;
person.birthday = "03/10/2010",
person.address = {
  street: '9605 West Chatfield Ave',
  apt: 'D',
  city: 'Littleton',
  state: 'CO',
}
person.hobbies = [
      { name: 'rabbits', levelOfInterest: 1000 },
      { name: 'dogs', levelOfInterest: 800 },
      { name: 'squirrels', levelOfInterest: 1000 },
      { name: 'talking', levelOfInterest: 500 },
]
person.isAwesome = true,

// Print the following
// 1. birthday
// console.log(person.birthday)
// Print the first hobby of person.hobbies
// console.log(person.hobbies[0].name)
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
// for(var key in person) {
//   console.log('key', key)
//   console.log('value', person[key]);
// }
