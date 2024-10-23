import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const InvitePage = () => {
  const { referralCode } = useParams<{ referralCode: string }>();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = `https://t.me/PopcornCapitals_Bot/app?startapp=${referralCode}`;
    }, 3000);

    return () => clearTimeout(timer);
  }, [referralCode]);

  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Приглашение в Popcorn Mini App" />
        <meta
          property="og:description"
          content="Запустите приложение и получите бонусы!"
        />
        <meta
          property="og:image"
          content="https://example.com/popcorn-image.jpg"
        />
        <meta property="og:url" content="https://t.me/PopcornCapitals_Bot" />
        <meta property="og:type" content="website" />
        <title>Приглашение</title>
      </Helmet>

      <h1>Перенаправление в Popcorn Mini App...</h1>
      <p>
        Сейчас вы будете перенаправлены в приложение Telegram через 3 секунды.
      </p>
    </div>
  );
};

export default InvitePage;
