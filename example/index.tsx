import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import 'react-native-url-polyfill/auto';
import { registerGlobals } from 'livekit-react-native';

registerGlobals();
AppRegistry.registerComponent(appName, () => App);
