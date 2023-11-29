interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}

const myPerson: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const greeting: string = greet(myPerson);

console.log(greeting);
