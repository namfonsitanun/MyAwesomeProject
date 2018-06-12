import React from 'react'
import { Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import axios from 'axios'

const LoadView = styled.View`
    flex:1;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const Loading = styled.Text`
    color: black;
`

const DataBox = styled.View`
    background-color: lightgrey;
    padding: 10px;
    margin: 10px;
`

export default class FetchExampleScreen extends React.Component {
    static navigationOptions = {
      title: 'Fetch Example',
    }

    constructor(props) {
      super(props)
      this.state = {
        isLoading: true,
        isError: false,
        dataSource: [],
      }
    }

    componentDidMount() {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
        .then((posts) => {
          this.setState({
            isLoading: false,
            dataSource: posts,
          })
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
            isError: true,
          })
        })
    }

    render() {
      console.log(this.state)
      if (this.state.isLoading) {
        return (
          <LoadView>
            <Loading>Loading...</Loading>
          </LoadView>
        )
      }
      if (this.state.isError) {
        return (
          <LoadView>
            <Loading>Error</Loading>
          </LoadView>)
      }
      return (
        <ScrollView>
          {this.state.dataSource.map((data) => {
            const {
                userId, id, title, body,
            } = data
            return (
              <DataBox>
                <Text>{userId}</Text>
                <Text>{id}</Text>
                <Text>{title}</Text>
                <Text>{body}</Text>
              </DataBox>
            )
})}
        </ScrollView>)
    }
}
