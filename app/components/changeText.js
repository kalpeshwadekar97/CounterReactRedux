import React, {Component}from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

export default class changeText extends Component {
  constructor(props) {
    super(props);
    this.onPress=this.onPress.bind(this);
  }
  onPress(){
      this.props.xyz();
  }
  render(){
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.button}>{this.props.aText}</Text>
        <TouchableHighlight
          onPress={this.onPress}
          underlayColor='rgba(255,255,255, 0.5)'
          activeOpacity={1}>
        <Text>SAY BYE...</Text>
      </TouchableHighlight>
      </View>
    );
  }
}
