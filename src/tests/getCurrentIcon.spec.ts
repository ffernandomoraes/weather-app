import { weatherIconCode } from '../helpers/consts';
import { getCurrentIcon } from '../helpers/functions';

describe('getCurrentIcon', function () {
  it('should return the default value', () => {
    expect(getCurrentIcon()).toBe('cloudy');
  });

  it('should return thunderstorm', () => {
    expect(getCurrentIcon(weatherIconCode.THUNDERSTORM)).toBe('thunderstorm');
  });

  it('should return heavy-showers', () => {
    expect(getCurrentIcon(weatherIconCode.DRIZZLE)).toBe('heavy-showers');
  });

  it('should return snow', () => {
    expect(getCurrentIcon(weatherIconCode.SNOW)).toBe('snow');
  });

  it('should return clear', () => {
    expect(getCurrentIcon(weatherIconCode.CLEAR)).toBe('clear');
  });

  it('should return cloudy', () => {
    expect(getCurrentIcon(weatherIconCode.CLOUDS)).toBe('cloudy');
  });
});
