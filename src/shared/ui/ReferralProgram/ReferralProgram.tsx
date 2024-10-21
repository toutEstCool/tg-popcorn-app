import s from "./ReferralProgram.module.css";

export const ReferralProgram = () => {
  return (
    <div className={s.referralProgramContainer}>
      <div className={s.contentWrapper}>
        <h3 className={s.title}>Реферальная программа</h3>
        <p className={s.subtitle}>Приглашай друзей - зарабатывай $CORNCOIN</p>
      </div>
      <div className={s.iconWrapper}>
        <img
          className={s.referralIcon}
          src={
            "https://s3-alpha-sig.figma.com/img/f2be/1e01/a52d7c1c6036209c89830b7f6054e816?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YwXJUDccfgEsXCqr4YW3u8V~96VN~wyTIQHvUfeHCxwm-dVBT6E4W~DUrKvO~5tnfdAL-yNRF9ns0YE~BHRZCPL16seSNqk60dcUrn9MuR~GAwHTDXNARN-CGNdUypY9frv22VFAdLIyeysqsJgtG~M5Khjxe6elODb2V411U6J-INHAjt~8ziz4aozxyvALENBmYd8bGGOhfLrr5SfMgbJF6gI4~DJLDGVralIL3SW5Y8tS56Jejap0gRGD8HQUQCZMKkoMVHTprG70viAKNwDgnbhn3QeGQG3~esNmz9Ll1GCQdIDgzjv1yW1CYERwqVYMcUiTddP1p90Il3PnBA__"
          }
          alt="Referral Icon"
        />
      </div>
    </div>
  );
};
