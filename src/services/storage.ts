class storageService {
  public setValue(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getValue(key: string) {
    const data = localStorage.getItem(key);

    if (!data) {
      return undefined;
    }

    return JSON.parse(data);
  }
}

const StorageService = new storageService();
export default StorageService;
