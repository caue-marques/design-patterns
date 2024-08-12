import { LightPowerCommand } from './LightPowerCommand'
import { SmartHouseLight } from './SmartHouseLight'
import { SmartHouseApp } from './SmartHouseApp'
import { LightIntensityCommand } from './LightIntensityCommand'

const bedroomLight = new SmartHouseLight('Luz Quarto')
const bathroomLight = new SmartHouseLight('Luz Banheiro')

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight)
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight)
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight)

const smartHouseApp = new SmartHouseApp()
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand)
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand)
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand)

smartHouseApp.executeCommand('btn-1')
smartHouseApp.undoCommand('btn-1')

smartHouseApp.executeCommand('btn-2')
smartHouseApp.undoCommand('btn-2')

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3')
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-3')
}
