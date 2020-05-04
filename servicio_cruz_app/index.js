import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import NavigationApp from './Navigation';
//ok
import HomeDetail from './src/components/HomeWithDet';//ok for test
import HomeTap from './src/components/HomeTap';//ok too
import TapHeaderHome from './src/components/TabHeaderHome';
import LoginNoTab from './src/LoginNoTab';
import indexHome from './src/views/indexNav';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => indexHome);
