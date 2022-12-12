import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatUSDPrice} from '@app/utils/formatPrice';
import {formatPercent} from '@app/utils/formatPercent';
import {ArrowUp, ArrowDown} from '@app/components/Icon';
import {COLORS} from '@app/config';
import {AssetLogo} from '@app/components/AssetLogo';
import {selectAssets} from '@app/slices/assetsSlice';

type AssetItemProps = {
  asset: ReturnType<typeof selectAssets>[0];
};

export const AssetItem: FC<AssetItemProps> = ({asset}) => {
  return (
    <View style={styles.container}>
      <AssetLogo symbol={asset.symbol} />
      <View
        style={{
          flexGrow: 1,
          paddingStart: 8,
        }}>
        <Text style={styles.coinNameText}>{asset.name}</Text>
        <Text style={styles.coinSymbolText}>{asset.symbol}</Text>
      </View>
      <View>
        <Text style={styles.coinSymbolPriceText}>
          {formatUSDPrice(asset.priceUSD)}
        </Text>

        <View style={styles.coinSymbolPriceChange}>
          {asset.price24hChange.isPositive() && <ArrowUp />}
          {asset.price24hChange.isNegative() && <ArrowDown />}

          <Text
            style={[
              styles.coinSymbolPriceChangeText,
              {
                color: asset.price24hChange.isPositive()
                  ? COLORS.GREEN
                  : COLORS.RED,
              },
            ]}>
            {formatPercent(asset.price24hChange)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 24,
    paddingVertical: 24,
    borderBottomColor: '#E4E8EB',
    borderBottomWidth: 1,
  },
  coinNameText: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.TEXT_PRIMARY,
  },
  coinSymbolText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.TEXT_SECONDARY,
  },
  coinSymbolPriceText: {
    textAlign: 'right',
    fontWeight: '600',

    fontSize: 16,
    lineHeight: 24,

    color: COLORS.TEXT_PRIMARY,
  },
  coinSymbolPriceChangeText: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  coinSymbolPriceChange: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
