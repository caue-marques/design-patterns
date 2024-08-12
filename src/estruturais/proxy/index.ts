import { SystemUserProxy } from './system-user/SystemUserProxy'

const clientCode = async () => {
  const user = new SystemUserProxy('Cauê', 'caue-marques')
  console.log('aguarde 2 segundos')
  console.log(await user.getAddresses())

  console.log('repetindo (cache)')
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses())
  }
}

clientCode()
