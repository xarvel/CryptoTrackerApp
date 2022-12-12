import {FC, useCallback, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRouterStackParamList} from '@app/routers/RootRouter/RootRouter';
import {Button} from '@app/components/Button';
import {COLORS} from '@app/config';
import {useAppDispatch} from '@app/hooks';
import {appendSymbol} from '@app/slices/symbolsSlice';

type AddAssetScreenProps = NativeStackScreenProps<
  RootRouterStackParamList,
  'AddAsset'
>;

export const AddAssetScreen: FC<AddAssetScreenProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const [symbol, setSymbol] = useState('');
  const handleSubmit = useCallback(() => {
    dispatch(appendSymbol(symbol.toUpperCase()));
    navigation.navigate('Home');
  }, [dispatch, navigation, symbol]);

  const handleChangeText = useCallback((text: string) => {
    setSymbol(text);
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View>
        <Text style={styles.headingText}>Add a Cryptocurrency</Text>
        <TextInput
          placeholder="Use a ticker symbol..."
          autoCapitalize="characters"
          autoCorrect={false}
          style={styles.input}
          defaultValue={symbol}
          onChangeText={handleChangeText}
        />
        <View style={styles.button}>
          <Button onPress={handleSubmit} width={155}>
            Add
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderColor: COLORS.YELLOW,
    borderWidth: 2,
    marginBottom: 24,
  },
  button: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  headingText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 36,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 24,
  },
});
