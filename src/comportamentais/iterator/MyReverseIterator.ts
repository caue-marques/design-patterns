import { MyIteratorProtocol } from './MyIteratorProtocol'
import { MyDataStructure } from './MyDataStructure'

export class MyReverseIterator implements MyIteratorProtocol<string> {
  private readonly dataStructure: MyDataStructure = new MyDataStructure()

  constructor(dataStructure: MyDataStructure) {
    this.dataStructure = dataStructure
  }

  private index = this.dataStructure.size()

  reset(): void {
    this.index = this.dataStructure.size()
  }

  next(): IteratorResult<string> {
    this.index--
    const returnValue = this.makeValue(this.dataStructure.items[this.index])
    returnValue.done = this.index < 0
    return returnValue
  }

  private makeValue(value: string): IteratorResult<string> {
    return { value, done: false }
  }
}
