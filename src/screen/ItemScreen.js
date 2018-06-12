import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, Button, TouchableHighlight } from 'react-native'
import propTypes from 'prop-types'

export default class ItemScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        company: 'thinknet',
        job: ['1', '2', '3'],
      },
      text: '',
    }
  }

  Addjob = () => {
    this.state.item.job.push(this.state.text)
    // console.log(this.state.text, this.state.item);

    this.setState({
      // item: {
      // 	job: [...this.state.item.job, this.state.text],
      // },
      text: '',
    })
  }

  Deljob = (index) => {
    // var jobs=Object.assign(this.state.item.job)
    // jobs.splice(index, 1);
    // this.setState({item:
    //     {
    //         job: jobs
    //     }
    // });
    this.setState({
      item: {
        job: this.state.item.job.filter((jobid, jobIndex) => {
          console.log(jobIndex)
          return jobIndex !== index
        }),
      },
    })
    // console.log(index, this.state.item.job);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <TextInput
            style={styles.inputbox}
            placeholder="Input name"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button title="Add" id="addjob" onPress={() => this.Addjob()} />
        </View>
        {/* <Text >{this.state.item.company}</Text> */}
        {this.state.item.job.map((job, index) => (
          <View style={styles.item} key={index}>
            <Text style={styles.jobtitle}>{job}</Text>
            <Button style={styles.jobbutton} color="red" title="Del" onPress={() => this.Deljob(index)} />
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // color: "black",
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
  },
  inputbox: {
    width: 250,
    height: 30,
    backgroundColor: 'ghostwhite',
  },
  list: {
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  item: {
    width: 300,
    height: 30,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: 'peachpuff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobtitle: {
    fontSize: 18,
    flex: 1,
    alignItems: 'flex-start',
  },
  jobbutton: {
    flex: 1,
    color: 'red',
    alignItems: 'flex-end',
  },
})
