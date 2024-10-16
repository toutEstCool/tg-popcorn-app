interface TelegramWebApp {
  initDataUnsafe?: any
  initData: string
}

interface Telegram {
  WebApp: TelegramWebApp
}

interface TelegramWindow extends Window {
  Telegram: Telegram
}

declare let window: TelegramWindow

declare global {
  interface Window {
    Telegram: Telegram
  }
}
