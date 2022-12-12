import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowUp: FC = props => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.182 7.025l-6.071 6.071-1.414-1.414 6.07-6.071H4.112v-2h8.071v8.071h-2V7.025z"
        fill="#0A8150"
      />
    </Svg>
  );
};
