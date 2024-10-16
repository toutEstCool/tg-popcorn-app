interface TelegramWebApp {
  initData: string
}

interface Telegram {
  WebApp: TelegramWebApp
}

interface TelegramWindow extends Window {
  Telegram: Telegram
}

declare let window: TelegramWindow
