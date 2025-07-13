import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import StakeScreen from '../screens/StakeScreen';
import SpotScreen from '../screens/SpotScreen';
import FutureScreen from '../screens/FutureScreen';
import WalletScreen from '../screens/WalletScreen';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Stake" component={StakeScreen} />
      <Tab.Screen name="Spot" component={SpotScreen} />
      <Tab.Screen name="Future" component={FutureScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
    </Tab.Navigator>
  );
}
