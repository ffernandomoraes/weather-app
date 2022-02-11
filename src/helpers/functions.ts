import { IIconType } from 'components/Shared/Icons';

export function getCurrentIcon(code: number): IIconType {
  const WEATHER_ICON_CODE = {
    THUNDERSTORM: 200,
    DRIZZLE: 300,
    RAIN: 500,
    SNOW: 600,
    ATMOSPHERE: 700,
    CLEAR: 800,
    CLOUDS: 801
  };

  switch (true) {
    case code >= WEATHER_ICON_CODE.THUNDERSTORM && code < WEATHER_ICON_CODE.DRIZZLE:
      return 'thunderstorm';

    case code >= WEATHER_ICON_CODE.DRIZZLE && code < WEATHER_ICON_CODE.RAIN:
      return 'heavy-showers';

    case code >= WEATHER_ICON_CODE.RAIN && code < WEATHER_ICON_CODE.SNOW:
      return 'heavy-showers';

    case code >= WEATHER_ICON_CODE.SNOW && code < WEATHER_ICON_CODE.ATMOSPHERE:
      return 'snow';

    case code >= WEATHER_ICON_CODE.ATMOSPHERE && code < WEATHER_ICON_CODE.CLEAR:
      return 'cloudy';

    case code === WEATHER_ICON_CODE.CLEAR:
      return 'clear';

    case code >= WEATHER_ICON_CODE.CLOUDS:
      return 'cloudy';
    default:
      return 'cloudy';
  }
}
