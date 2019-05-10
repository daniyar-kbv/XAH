import React from 'react';
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


class Home extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            header: (
                <Header hasTabs style={{ backgroundColor: '#000000', elevation: 0 }} androidStatusBarColor='#000000'>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>XAH e-Journal</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => navigation.navigate("Login")}>
                            <Text>Вход</Text>
                        </Button>
                    </Right>
                </Header>
            ),
        };
    };

    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading="Главная" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}>
                        <Text>Tab1</Text>
                    </Tab>
                    <Tab heading="Авто" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}>
                        <Text>Tab2</Text>
                    </Tab>
                    <Tab heading="Бизнес" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}>
                        <Text>Tab3</Text>
                    </Tab>
                    <Tab heading="Спорт" tabStyle={{ backgroundColor: '#000000' }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: '#000000' }} activeTextStyle={{ color: '#fff' }}>
                        <Text>Tab4</Text>
                    </Tab>
                </Tabs>
                <Fab style={{ backgroundColor: '#000000' }}>
                    <Icon name="search" />
                </Fab>
            </Container>
        )
    }
}

export default Home;