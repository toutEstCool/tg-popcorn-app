interface TelegramWebApp {
  initData: string
  initDataUnsafe?: any
  [key: string]: any
}

interface Telegram {
  WebApp: TelegramWebApp
}

interface TelegramWindow extends Window {
  Telegram?: Telegram
}

declare let window: TelegramWindow

declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp
    }
  }
}
