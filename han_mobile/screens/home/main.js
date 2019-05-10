import React from 'react';
import { FlatList, Image } from 'react-native';
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

class Main extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        data={[
                            {
                                title: 'Переименование столицы',
                                author: 'Мурат Муратович',
                                like_count: '1708921',
                                comment_count: '355923',
                                date_published: '22.05.19',
                                author_profile_url: '',
                                article_url: ''
                            }, 
                            {
                                title: '',
                                author: '',
                                like_count: '',
                                comment_count: '',
                                date_published: '',
                                author_profile_url: '',
                                article_url: ''
                            }, 
                            {
                                title: '',
                                author: '',
                                like_count: '',
                                comment_count: '',
                                date_published: '',
                                author_profile_url: '',
                                article_url: ''
                            },
                        ]}
                        renderItem={({ item }) => <Card onPress={() => this.props.navigation.navigate("Comments")}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../assets/images/murat.jpg')} />
                                    <Body>
                                        <Text>{item.title}</Text>
                                        <Text note>{item.author}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../../assets/images/astana.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>{item.like_count}</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>{item.comment_count}</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>{item.date_published}</Text>
                                </Right>
                            </CardItem>
                        </Card>} />
                </Content>
            </Container>
        );
    }
}

export default Main;