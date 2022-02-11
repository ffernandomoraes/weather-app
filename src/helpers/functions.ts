import { IIconType } from 'components/Icons';

import { weatherIconCode } from './consts';

export function getCurrentIcon(code: number): IIconType {
  switch (true) {
    case code >= weatherIconCode.THUNDERSTORM && code < weatherIconCode.DRIZZLE:
      return 'thunderstorm';

    case code >= weatherIconCode.DRIZZLE && code < weatherIconCode.RAIN:
      return 'heavy-showers';

    case code >= weatherIconCode.RAIN && code < weatherIconCode.SNOW:
      return 'heavy-showers';

    case code >= weatherIconCode.SNOW && code < weatherIconCode.ATMOSPHERE:
      return 'snow';

    case code >= weatherIconCode.ATMOSPHERE && code < weatherIconCode.CLEAR:
      return 'cloudy';

    case code === weatherIconCode.CLEAR:
      return 'clear';

    case code >= weatherIconCode.CLOUDS:
      return 'cloudy';
    default:
      return 'cloudy';
  }
}
