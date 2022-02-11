class geolocationService {
  public async getPosition(): Promise<GeolocationPosition> {
    const ERRORS: { [key: number]: string } = {
      1: 'O usuário negou a solicitação de geolocalização.',
      2: 'As informações de localização não estão disponíveis.',
      3: 'A solicitação para obter a localização do usuário expirou.'
    };

    return await new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        console.error('[@weather-app] Geolocation is not supported by this browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        position => resolve(position),
        (err: GeolocationPositionError) => {
          if (err?.code && ERRORS[err?.code]) {
            reject(ERRORS[err.code]);
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
