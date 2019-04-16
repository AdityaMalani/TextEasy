
import { createStackNavigator, createAppContainer } from "react-navigation";
import Loginscreen from './src/components/Loginscreen';
import Loading from './src/components/Loading';
import Main from './src/components/Main';
import Signup from './src/components/Signup';
import TextToSpeech from './src/components/TextToSpeech'
import ImagePicker from './src/components/ImagePicker'
import Edit from './src/components/Edit'

const AppNavigator = createStackNavigator(
  {
    Login: Loginscreen,
    Loading: Loading,
    Main: Main,
    Signup: Signup,
    TTS: TextToSpeech,
    ImagePicker: ImagePicker,
    Edit: Edit,
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(AppNavigator);

