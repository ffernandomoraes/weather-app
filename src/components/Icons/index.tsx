import { memo, useMemo } from 'react';

import Clear from './Clear';
import Cloudy from './Cloudy';
import HeavyShowers from './HeavyShowers';
import PartlyCloudy from './PartlyCloudy';
import Snow from './Snow';
import Thunderstorm from './Thunderstorm';

export type IIconType = 'clear' | 'cloudy' | 'heavy-showers' | 'partly-cloudy' | 'thunderstorm' | 'snow';

interface IProps {
  name: IIconType;
}

const Icons = memo<IProps>(({ name }) => {
  const iconsMap = useMemo(
    () => ({
      clear: <Clear />,
      cloudy: <Cloudy />,
      'heavy-showers': <HeavyShowers />,
      'partly-cloudy': <PartlyCloudy />,
      thunderstorm: <Thunderstorm />,
      snow: <Snow />
    }),
    []
  );

  return <>{iconsMap[name]}</>;
});

export default Icons;
