import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowDown: FC = props => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.818 8.975l6.071-6.071 1.414 1.414-6.07 6.071h4.656v2H3.818V4.318h2v4.657z"
        fill="#DE3617"
      />
    </Svg>
  );
};
