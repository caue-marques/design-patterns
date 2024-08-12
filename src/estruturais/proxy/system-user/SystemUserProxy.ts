import { AdminUser } from './AdminUser'
import { ISystemUser, ISystemUserAddress } from './ISystemUser'

export class SystemUserProxy implements ISystemUser {
  private realUser: ISystemUser | null = null
  private realUserAddresses: ISystemUserAddress[] | null = null

  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  private createUser() {
    if (!this.realUser) {
      this.realUser = new AdminUser(this.firstName, this.userName)
    }

    return this.realUser
  }

  async getAddresses(): Promise<ISystemUserAddress[]> {
    this.realUser = this.createUser()

    if (!this.realUserAddresses) {
      this.realUserAddresses = await this.realUser.getAddresses()
    }

    return this.realUserAddresses
  }
}
