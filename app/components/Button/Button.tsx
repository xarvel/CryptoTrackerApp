import {FC} from 'react';
import {Pressable, PressableProps, StyleSheet, Text} from 'react-native';
import {COLORS} from '@app/config';

type ButtonProps = {
  onPress: PressableProps['onPress'];
  children: string;

  width?: number;
};

export const Button: FC<ButtonProps> = ({onPress, children, width}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        {
          width: width ? width : undefined,
        },
      ]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.YELLOW,
    paddingVertical: 12,
    borderRadius: 4,
  },
  text: {
    color: COLORS.BLUE,
    textAlign: 'center',
  },
});
