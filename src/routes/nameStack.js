import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Name from '../components/Name'
import Details from '../components/Details'

const screens = {
    Name: {
        screen: Name
    },
    Details: {
        screen: Details
    }
}

const NameStack = createStackNavigator(screens)

export default createAppContainer(NameStack)