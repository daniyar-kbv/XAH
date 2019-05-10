import React from 'react';
import { FlatList } from 'react-native';
import {
    Container,
    Content,
    Card,
    CardItem,
    Body,
    Text
} from 'native-base';

class Comments extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <FlatList
                        data={[
                            {}, {}, {}, {}, {}
                        ]}
                        renderItem={({ item }) => <Card>
                            <CardItem header>
                                <Text>Мурат Муратович</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                    Очень интересная новость.
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>22.05.19</Text>
                            </CardItem>
                        </Card>} />
                </Content>
            </Container>
        );
    }
}

export default Comments;