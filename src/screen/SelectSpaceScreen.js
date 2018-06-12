import React from 'react'
import styled from 'styled-components/native'
import { Image, View } from 'react-native'

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`

const ContentView = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
`

const StyledText = styled.Text`
  color: ${props => (props.color ? props.color : 'black')};
  text-align: ${props => props.position || 'center'};
  font-weight: ${props => props.text || 'normal'};
`
const Card = styled.View`
  border-radius: 5px;
  background-color: white;
  margin: 5px;
`

const Status = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 50;
  width: 12px;
  height: 12px;
  background-color: ${props => props.color || 'red'};
`

const Button = styled.TouchableOpacity`
  justify-content: ${props => props.position || 'center'};
  background-color: #f9253e;
  padding: 10px;
  border-radius: 5px;
  width: ${props => props.width || '325px'};
`

class SelectSpaceScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Space',
  }

  render() {
    const pic = {
      url: 'https://www.w3schools.com/howto/img_paris.jpg',
    }
    return (
      <StyledView>
        <Button width="150px">
          <StyledText color="white" text="bold">
            + New Space
          </StyledText>
        </Button>
        <ContentView>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                backgroundColor: 'white',
              }}
            >
              <StyledText position="left">Travel</StyledText>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <Status color="red" />
              </View>
            </View>
            <Image source={pic} style={{ width: 100, height: 75 }} />
          </Card>
          <Card>
            <View
              style={{
                flexDirection: 'row',
                margin: 5,
                backgroundColor: 'white',
              }}
            >
              <StyledText position="left">Travel</StyledText>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <Status color="orange" />
              </View>
            </View>
            <Image source={pic} style={{ width: 100, height: 75 }} />
          </Card>
        </ContentView>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <Button>
            <StyledText color="white" text="bold">
              1 steps to go >
            </StyledText>
          </Button>
        </View>
      </StyledView>
    )
  }
}

export default SelectSpaceScreen
