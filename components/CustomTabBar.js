import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  const iconMap = {
    Home: 'home',
    Market: 'bar-chart',
    Stake: 'trending-up',
    Spot: 'swap-horizontal',
    Future: 'time',
    Wallet: 'wallet',
  };

  return (
    <View
      className="flex-row justify-between items-center bg-primary px-4 py-2"
      style={{ paddingTop: insets.top }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            className={`px-3 py-2 rounded-full ${
              isFocused ? 'border border-white/20' : ''
            }`}
          >
            <View className="flex-row items-center">
              <Ionicons
                name={iconMap[route.name] || 'ellipse'}
                size={16}
                color={isFocused ? 'white' : '#EEEEEE'}
              />

              {isFocused && (
                <Text className="ml-1 text-[12px] text-white font-bold leading-none align-middle">
                  {label}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
