import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Home from '../screens/home/home';
import Login from '../screens/login/login';
import Article from '../screens/article/article';



export const Stack = createStackNavigator({
	Home: { screen: Home },
    Login: { screen: Login },
    Article: { screen: Article }
}, {
	initialRouteName: 'Home',
});

export const AppNavigator = createAppContainer(Stack);