import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@app/screens/HomeScreen';
import {AddAssetScreen} from '@app/screens/AddAssetScreen';

export type RootRouterStackParamList = {
  Home: undefined;
  AddAsset: undefined;
};

const Stack = createNativeStackNavigator<RootRouterStackParamList>();

export const RootRouter: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddAsset"
        component={AddAssetScreen}
        options={{
          headerTitle: '',
          headerBackTitle: 'Back to list',
        }}
      />
    </Stack.Navigator>
  );
};
