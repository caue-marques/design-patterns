export interface Prototype {
  clone(): Prototype
}

export class Address {
  public street: string
  public number: number

  constructor(street: string, number: number) {
    this.street = street
    this.number = number
  }
}

export class Person implements Prototype {
  public name: string
  public age: number
  public addresses: Address[] = []

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  clone(): Person {
    const newObject = Object.create(this)

    return newObject
  }

  addAddress(address: Address) {
    this.addresses.push(address)
  }
}

const address1 = new Address('Av Brasil', 15)
const person1 = new Person('Cauê', 23)
person1.addAddress(address1)

const person2 = person1.clone()

person2.name = 'Teste'

console.log(person2.name)
console.log(person2.addresses)
