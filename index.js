/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './src/screens/HomeScreen';
import SigninScreen from './src/screens/SigninScreen';
import SplashScreen from './src/screens/SplashScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
