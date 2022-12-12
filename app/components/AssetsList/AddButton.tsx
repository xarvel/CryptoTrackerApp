import React, {FC} from 'react';
import {Text, Pressable, PressableProps} from 'react-native';

type AddButtonProps = {
  onPress: PressableProps['onPress'];
};

export const AddButton: FC<AddButtonProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          lineHeight: 24,
          textAlign: 'center',
          color: '#385775',
        }}>
        + Add a Cryptocurrency
      </Text>
    </Pressable>
  );
};
