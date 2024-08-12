import { ISystemUser, ISystemUserAddress } from './ISystemUser'

export class AdminUser implements ISystemUser {
  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  async getAddresses(): Promise<ISystemUserAddress[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          {
            street: 'Av Brasil',
            number: 50,
          },
          {
            street: 'Av Santos',
            number: 150,
          },
        ])
      }, 2000)
    })
  }
}
