console.log('js');

$(document).ready(readyNow);

let dogs = [];

class Dog {
    constructor(name, breed, age){
    this.name = name;
    this.breed = breed;
    this.age = age;
    }
}

dogs.push( new Dog('Evie', 'Pitbull', '6'));
dogs.push( new Dog('Rilo', 'Rat Dog', '12'));
dogs.push( new Dog('Vinny', 'Pitbull', '5'));
dogs.push( new Dog('Lady', 'Cocker', '10'));
dogs.push( new Dog('Kuma', 'Akita', '13'));
dogs.push( new Dog('Roxy', 'Boxer', '7'));






function readyNow() {
    console.log('JQ');

    // selecting grid test div
    let element = $('#gridTest');
for (let dog of dogs) {
    let outputString = `
        <div class ="col-4">
        <h3>${dog.name}</h3>
        <p>${dog.breed}</p>
        <p>${dog.age}</p>


        </div>`
        element.append(outputString);
    }
}

