import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CustomBottomTabs({ state, descriptors, navigation }) {
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
      className="flex-row justify-around bg-primary px-2"
      style={{ paddingBottom: insets.bottom + 8, paddingTop: 8 }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            className="items-center px-2"
          >
            <View className="flex-row items-center pb-5">
              <Ionicons
                name={iconMap[route.name] || 'ellipse'}
                size={20}
                color={isFocused ? 'white' : '#EEEEEE'}
              />
              {isFocused && (
                <Text className="ml-2 text-white/75 text-sm font-bold">
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
