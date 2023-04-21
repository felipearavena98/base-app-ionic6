import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'scannercordova',
  webDir: 'www',
  bundledWebRuntime: false,
  "plugins": {
    "BarcodeScanner": {
      "android": {
        "formats": "QR_CODE,PDF_417"
      },
      "ios": {
        "formats": "QR_CODE,PDF417"
      }
    }
  }
};

export default config;
