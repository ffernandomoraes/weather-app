import { geoErrors } from 'helpers/consts';

class geolocationService {
  public async getPosition(): Promise<GeolocationPosition> {
    return await new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject('[@weather-app] Geolocation is not supported by this browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        err => {
          if (err?.code && geoErrors[err?.code]) {
            reject(geoErrors[err.code]);
            return;
          }

          reject(err?.message);
        }
      );
    });
  }
}

const GeolocationService = new geolocationService();
export default GeolocationService;
