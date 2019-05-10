import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Home from '../screens/home/home';
import Login from '../screens/login/login';



export const Stack = createStackNavigator({
	Home: { screen: Home },
	Login: { screen: Login },
}, {
	initialRouteName: 'Home',
});

export const AppNavigator = createAppContainer(Stack);