const person = {
    firstName: 'satya',
    lastName: 'divya',
    age: 22
}

for(const key in person) {
    console.log(key, person[key])
}