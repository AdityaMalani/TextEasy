import React from 'react'
import { StyleSheet, Platform, Image, Text, View ,Button,TextInput} from 'react-native'

export default class Main extends React.Component {
  state = { tts: '' }

  uploadPicture = () =>{
        this.props.navigation.navigate('ImagePicker')
}

  convert = () =>{
          const {tts} = this.state
          this.props.navigation.navigate('TTS',{tts:tts})
  }

render() {
return (
      <View style={styles.container}>
        <Button title="Upload/Take Picture" onPress={this.uploadPicture}></Button>
        <Text>or</Text>
        <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Enter text for TTS"
        onChangeText={tts => this.setState({ tts })}
        value={this.state.tts}
        />
        <Button title="Convert" onPress={this.convert}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})