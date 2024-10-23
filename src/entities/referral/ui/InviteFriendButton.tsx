import { useEffect, useState } from "react";
import { useClipboard } from "use-clipboard-copy";
import { useGenerateReferralCodeMutation } from "../queries/queriest";

import s from "./InviteFriendButton.module.css";
import { useGetCurrentUser } from "../../user/queries";

interface IInviteFriendButtonProps {
  className?: string;
  btnText?: string;
}

export const InviteFriendButton = ({
  className,
  btnText,
}: IInviteFriendButtonProps) => {
  const { data: currentUserData } = useGetCurrentUser();
  const [copied, setCopied] = useState(false);
  const [shouldCopy, setShouldCopy] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  const clipboard = useClipboard();

  const inviteLink = referralCode
    ? `https://t.me/PopcornCapitals_Bot/app?startapp=${referralCode}`
    : "";

  const { mutate: generateReferralCode, status } =
    useGenerateReferralCodeMutation({
      onSuccess: (data) => {
        setReferralCode(data.referralCode);
        setShouldCopy(true);
      },
      onError: (error) => {
        console.error("Ошибка при генерации реферального кода:", error);
      },
    });

  const isLoading = status === "pending";

  const handleInviteClick = () => {
    generateReferralCode({ userId: currentUserData?.id });
  };

  useEffect(() => {
    if (shouldCopy && referralCode) {
      handleCopyLink();
    }
  }, [shouldCopy, referralCode]);

  const handleCopyLink = () => {
    if (referralCode) {
      try {
        clipboard.copy();
        navigator.share?.({
          title: "PopcornCapitals_Bot",
          url: inviteLink,
        });

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);

        //@ts-ignore
        if (window.Telegram?.WebApp?.clipboardTextReceived) {
          //@ts-ignore
          window.Telegram.WebApp.clipboardTextReceived(inviteLink);
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        }

        if (
          //@ts-ignore
          !window.Telegram?.WebApp?.setClipboardText &&
          !navigator?.clipboard?.writeText
        ) {
          alert(
            "Ваше устройство не поддерживает автоматическое копирование. Пожалуйста, скопируйте ссылку вручную.",
          );
        }
      } catch (error) {
        console.error("Ошибка при копировании ссылки: ", error);
      }
      setShouldCopy(false);
    } else {
      console.error("Нет доступного referralCode.");
    }
  };

  return (
    <div>
      <button
        className={className}
        onClick={handleInviteClick}
        disabled={isLoading}
      >
        {btnText
          ? btnText
          : isLoading
            ? "Генерация..."
            : copied
              ? "Реферальный код скопирован"
              : "Пригласить друга"}
      </button>
      <br />
      {referralCode && (
        <input
          defaultValue={inviteLink}
          ref={clipboard.target}
          className={s.inviteLink}
          readOnly
        />
      )}
    </div>
  );
};
