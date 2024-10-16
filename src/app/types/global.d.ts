interface TelegramWebApp {
  initData: string
  initDataUnsafe?: any // Сделали тип 'any', чтобы избежать ошибок с полем 'initDataUnsafe'
  [key: string]: any // Позволяет использовать любые методы или поля, даже если они не объявлены
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
