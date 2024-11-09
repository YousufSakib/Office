type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address;
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address: {
    street: "123 Main",
    city: "anyTown",
    country: "UAE",
  },
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address: {
    street: "123 Main",
    city: "anyTown",
    country: "USA",
  },
};

function displayInfo(person: Person) {
  if (person.address) {
    console.log(
      `${person.name} lives at ${person.address.street}, ${person.address.city}, ${person.address.country}`
    );
  } else {
    console.log(`${person.name} does not have an address.`);
  }
}

displayInfo(person1);
displayInfo(person2);
