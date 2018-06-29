import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS, TouchableHighlight, Image, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const window = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS initialRoute={{
        component: InitialScene, 
        title: 'Hello React Native!'}}
      style={{flex: 1}}/>
    );
  }
}

class InitialScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  _onForward = () => {
    // this.props.navigator.push(secondScene)
    this.props.navigator.push({
      component: SecondScene,
      title: 'Woohoo!'
      // passProps
    });
  }

  render() {
    let goldengate = {
      uri: 'https://burritojustice.files.wordpress.com/2009/01/golden-gate-bridge.jpg'
    };
    let corgi = {
      uri: 'http://25.media.tumblr.com/tumblr_lcl1khUpo31qbwakso1_500.jpg'
    };
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image source={goldengate} style={{width: window.width, height: 200}}/>
        <Text style={styles.teal}>Kevin Dang Nguyen</Text>
        <Text style={styles.bold}>{'\n'}iOS Developer/Engineer</Text>
        <Text style={styles.bold}>University of California, Davis 15</Text>
        <Text style={styles.bold}>B.S. in Computer Science</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text style={styles.gray}>{'\n'}Tap here to learn more about me!</Text>
        </TouchableHighlight>
        <Image source={corgi} style={{width: window.width, height: 500}}/>
      </ScrollView>
      </View>
    )
  }
}

class SecondScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teal: {
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gray: {
    color: 'gray',
    textAlign: 'center',
  },
});