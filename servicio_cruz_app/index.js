import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import NavigationApp from './Navigation';
import Login from './src/index'//tiene drawer ok
//import Nav2 from './src/components/Nav2'
//ok
import HomeDetail from './src/components/HomeWithDet';//ok for test
import HomeTap from './src/components/HomeTap';//ok too
import TapHeaderHome from './src/components/TabHeaderHome';
import LoginNoTab from './src/LoginNoTab';
import indexHome from './src/views/indexNav';//usar este!!
import BaseNav from './src/components/BaseNavigation';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => LoginNoTab);
