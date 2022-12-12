import {assetsRequest} from './messari/assetsRequest';

export type Asset = {
  id: string;
  symbol: string;
  name: string;
  priceUSD: number;
  price24hChange: number;
};

export type AssetsResult = Asset[];

export const fetchAssets = async (): Promise<AssetsResult> => {
  const response = await assetsRequest();

  return response.data.map(item => ({
    id: item.id,
    symbol: item.symbol,
    name: item.name,
    priceUSD: item.metrics.market_data.price_usd,
    price24hChange: item.metrics.market_data.percent_change_usd_last_24_hours,
  }));
};
