import React, { Component } from 'react';
import {
ScrollView,
  TextInput,
  Platform,
  Text,
  View,
  Button
} from 'react-native';
import styles from '../../styles';

var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath + '/texteasy.txt';

class Edit extends Component {
state = { etext: ''}
convert = () =>{
        const {etext} = this.state
        this.props.navigation.navigate('TTS',{tts:etext})
}

save = () =>{
        RNFS.writeFile(path, this.state.etext, 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!');
    this.props.navigation.navigate('Main');
  })
  .catch((err) => {
    console.log(err.message);
  });
}

componentDidMount() {
        const { navigation } = this.props;
        const tts = navigation.getParam('text', 'hi');
        this.setState({etext:tts})
        }
  render() {
    return (
      <ScrollView>
        <TextInput
          placeholder=""
          autoCapitalize="none"
          onChangeText={etext => this.setState({ etext })}
          value={this.state.etext}
          multiline={true}
        />
        <Button title="Convert to speech" onPress={this.convert}/>
        <Button title='Save' onPress={this.save}/>
      </ScrollView>
    );
  }
}

Edit.navigationOptions = {
  title: 'Verify the conversion',
};

export default Edit;
