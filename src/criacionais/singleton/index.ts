import { ClassicDatabase } from './db/Database'

const instance1 = ClassicDatabase.getInstance()

instance1.add({ name: 'Cauê', age: 23 })
instance1.add({ name: 'João', age: 35 })
instance1.add({ name: 'Maria', age: 48 })

const instance2 = ClassicDatabase.getInstance()

instance2.add({ name: 'Roberto', age: 23 })
instance2.add({ name: 'Luiza', age: 35 })
instance2.add({ name: 'Pedro', age: 48 })

instance2.list()

instance2.remove(3)

instance2.list()

console.log(instance1 === instance2)
