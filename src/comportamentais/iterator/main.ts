import { MyDataStructure } from './MyDataStructure'
import { MyReverseIterator } from './MyReverseIterator'

const dataStructure = new MyDataStructure()
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F')

const [a, b] = dataStructure
console.log('ROUBADOS:', a, b)
console.log('EXECUTEI VÁRIAS COISAS E DEPOIS USEI O ITERATOR')
const [c, d, ...rest] = dataStructure
console.log(c, d, rest)

dataStructure.resetIterator()
for (const data of dataStructure) {
  console.log(data)
}
console.log()
dataStructure.changeIterator(new MyReverseIterator(dataStructure))

for (const data of dataStructure) {
  console.log(data)
}
console.log()

console.log('AQUI PRECISO ZERAR O ITERATOR')
dataStructure.resetIterator()
for (const data of dataStructure) {
  console.log(data)
}
console.log()
