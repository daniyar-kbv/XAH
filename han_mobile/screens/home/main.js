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
                            {}, {}, {},
                        ]}
                        renderItem={({ item }) => <Card>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{ uri: 'Image URL' }} />
                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={{ uri: 'Image URL' }} style={{ height: 200, width: null, flex: 1 }} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Button transparent>
                                        <Icon active name="thumbs-up" />
                                        <Text>1255522</Text>
                                    </Button>
                                </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>424355</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>22.05.19</Text>
                                </Right>
                            </CardItem>
                        </Card>} />
                </Content>
            </Container>
        );
    }
}

export default Main;