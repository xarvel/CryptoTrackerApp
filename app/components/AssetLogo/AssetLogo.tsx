import {FC} from 'react';
import FastImage from 'react-native-fast-image';

type AssetLogoProps = {
  symbol: string;
};
export const AssetLogo: FC<AssetLogoProps> = ({symbol}) => {
  return (
    <FastImage
      style={{height: 48, width: 48}}
      source={{
        uri: `https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`,
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};
