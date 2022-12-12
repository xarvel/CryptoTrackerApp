import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {RefreshControl, View} from 'react-native';
import {AssetItem} from '@app/components/AssetItem';
import {useAppDispatch, useAppSelector} from '@app/hooks';
import {selectSymbols} from '@app/slices/symbolsSlice';
import {
  loadAssetsAsync,
  selectAssets,
  selectAssetsStatus,
} from '@app/slices/assetsSlice';
import {FlatList} from 'react-native';
import {Header} from '@app/components/Header';
import {AddButton} from '@app/components/AssetsList/AddButton';

type AssetsListProps = {
  onAdd: () => void;
};
export const AssetsList: FC<AssetsListProps> = ({onAdd}) => {
  const symbols = useAppSelector(selectSymbols);
  const assets = useAppSelector(selectAssets);
  const assetsStatus = useAppSelector(selectAssetsStatus);

  const dispatch = useAppDispatch();

  const handleReload = useCallback(() => {
    dispatch(loadAssetsAsync());
  }, [dispatch]);

  useEffect(() => {
    handleReload();
  }, [handleReload]);

  const filteredAssets = useMemo(() => {
    return assets.filter(a => symbols.includes(a.symbol));
  }, [assets, symbols]);

  return (
    <>
      <Header />
      <FlatList
        refreshing={assetsStatus === 'loading'}
        ListFooterComponent={
          <View
            style={{
              padding: 48,
            }}>
            <AddButton onPress={onAdd} />
          </View>
        }
        refreshControl={
          <RefreshControl
            refreshing={assetsStatus === 'loading'}
            onRefresh={handleReload}
          />
        }
        data={filteredAssets}
        renderItem={({item: asset}) => <AssetItem asset={asset} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};
