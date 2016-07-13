import React, { Component } from 'react';
import ChangeText from '../components/changeText';
import { createStore } from 'redux';
import { changeText } from '../actions';
import { connect } from 'react-redux';
import changeTextReducer from '../reducers';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
const store = createStore(changeTextReducer);

class MainAppScreen extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { aText, onTextPress } = this.props;
    console.log("container render "+aText);
    return (
        <ChangeText
          aText={aText}
          xyz={onTextPress} />

    );
  }
}
const mapStateToProps = (state) => {
    console.log("mapStateToProps "+state.changeText.text);
  return {
  aText: state.changeText.text
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTextPress: () => {
      console.log("dispatch");
      store.dispatch(changeText());
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(MainAppScreen);
