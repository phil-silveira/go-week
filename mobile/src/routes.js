import { createStackNavigator } from 'react-navigation'

import New from './pages/New'
import Login from './pages/Login'
import Timeline from './pages/Timeline'

const Routes = createStackNavigator({
    Login,
    New,
    Timeline
})

export default Routes