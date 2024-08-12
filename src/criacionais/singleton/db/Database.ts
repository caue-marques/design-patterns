import { User } from '../typings/user'

export class ClassicDatabase {
  private static instance: ClassicDatabase | null = null
  private users: User[] = []

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new ClassicDatabase()
    }

    return this.instance
  }

  public add(user: User) {
    this.users.push(user)
  }

  public remove(index: number) {
    this.users.splice(index, 1)
  }

  public list() {
    for (let user of this.users) {
      console.log(user)
    }
    console.log('========================================')
  }
}
