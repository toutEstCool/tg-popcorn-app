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
  interface TelegramWebApp {
    initDataUnsafe?: {
      tgWebAppStartParam?: string
    }
    initData: string
    showPopup?: (params: {
      message: string
      buttons: { text: string; id: string }[]
    }) => void
  }

  interface Window {
    Telegram: {
      WebApp: TelegramWebApp
    }
  }
}
