import {MESSARI_API_V2} from '../../config';

type Response = {
  data: {
    id: string;
    slug: string;
    symbol: string;
    name: string;
    metrics: {
      market_data: {
        price_usd: number;
        percent_change_usd_last_24_hours: number;
      };
    };
  }[];
};

const fields = [
  'id',
  'slug',
  'symbol',
  'name',
  'metrics/market_data/price_usd',
  'metrics/market_data/percent_change_usd_last_24_hours',
];

export const assetsRequest = async (): Promise<Response> => {
  const response = await fetch(
    `${MESSARI_API_V2}/assets?limit=500&fields=${fields.join(',')}`,
  );

  return response.json();
};
