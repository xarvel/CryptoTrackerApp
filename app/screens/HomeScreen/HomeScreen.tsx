import React, {FC, useCallback} from 'react';
import {AssetsList} from '@app/components/AssetsList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRouterStackParamList} from '@app/routers/RootRouter';

type HomeScreenProps = NativeStackScreenProps<RootRouterStackParamList, 'Home'>;
export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  return (
    <AssetsList
      onAdd={useCallback(() => navigation.navigate('AddAsset'), [navigation])}
    />
  );
};
