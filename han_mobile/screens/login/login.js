import React from 'react';
import {
    Container,
    Header,
    Left,
    Body,
    Button,
    Icon,
    Title,
    Form,
    Input,
    Item,
    Content,
    Text
} from 'native-base';

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#000000', elevation: 0 }} androidStatusBarColor='#000000'>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Вход</Title>
                    </Body>
                </Header>
                <Content style={{padding: 16}}>
                    <Form>
                        <Item regular style={{marginTop: 16}}>
                            <Input placeholder='Имя пользователя' />
                        </Item>
                        <Item regular style={{marginTop: 8}}>
                            <Input placeholder='Пароль' secureTextEntry />
                        </Item>
                    </Form>
                    <Button full dark style={{marginTop: 8}}>
                        <Text>Войти</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Login;