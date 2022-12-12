import {FC} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '@app/config';

export const Header: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: COLORS.BLUE,
        padding: 24,
        paddingTop: insets.top + 24,
      }}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 20,
          lineHeight: 28,
          color: COLORS.WHITE,
        }}>
        CryptoTracker Pro
      </Text>
    </View>
  );
};
