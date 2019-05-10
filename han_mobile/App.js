import React from 'react';
import { Font, AppLoading } from 'expo';
import { StyleSheet, View, Image } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  Text,
  Tabs,
  Tab,
  Right,
  Left,
  Fab,
  Icon,
  Body,
  Title,
} from 'native-base';
import Login from './screens/login/login';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <AppLoading />
        </Container>
      );
    }
    return (
      // <Container>
      //   <Header hasTabs style={{ backgroundColor: '#000000', elevation: 0 }} androidStatusBarColor='#000000'>
      //     <Left>
      //       <Button transparent>
      //         <Icon name='menu' />
      //       </Button>
      //     </Left>
      //     <Body>
      //       <Title>XAH e-Journal</Title>
      //     </Body>
      //     <Right>
      //       <Button transparent>
      //         <Text>Вход</Text>
      //       </Button>
      //     </Right>
      //   </Header>
      //   <Tabs>
      //     <Tab heading="Главная" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}></Tab>
      //     <Tab heading="Авто" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}></Tab>
      //     <Tab heading="Бизнес" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}></Tab>
      //     <Tab heading="Спорт" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}></Tab>
      //   </Tabs>
      //   <Fab style={{ backgroundColor: '#000000' }}>
      //     <Icon name="search" />
      //   </Fab>
      // </Container>
      <Login/>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
