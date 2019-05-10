import React from 'react';
import {
    Container,
    Content,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Button,
    Icon,
    Right
} from 'native-base';

class Article extends React.Component {
    render() {
        return (
            <Container>
                <Button full dark onPress={() => this.props.navigation.navigate("Comments")}>
                    <Text>Войти</Text>
                </Button>
            </Container>
        );
    }
}

export default Article;