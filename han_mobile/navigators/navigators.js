import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation';
import Home from '../screens/home/home';
import Login from '../screens/login/login';
import Article from '../screens/article/article';
import Comments from '../screens/comments/comments';



export const Stack = createStackNavigator({
	Home: { screen: Home },
    Login: { screen: Login },
    Article: { screen: Article },
    Comments: { screen: Comments }
}, {
	initialRouteName: 'Home',
});

export const AppNavigator = createAppContainer(Stack);