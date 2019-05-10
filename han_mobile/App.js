import React from 'react';
import { Font, AppLoading } from 'expo';
import { Container } from 'native-base';
import { AppNavigator } from './navigators/navigators'
import Main from './screens/home/main'

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
      // <AppNavigator/>
      <Main/>
    );
  }
}

