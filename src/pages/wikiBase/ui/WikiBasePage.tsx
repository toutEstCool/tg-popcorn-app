import { CustomInput } from '../../../shared/ui/CustomInput'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { Tile } from '../../../shared/ui/Tile'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './WikiBasePage.module.css'

export const WikiBasePage = () => {
  return (
    <AppLayout>
      <HeaderWithBackButton title="База знаний" />
      <div className={s.wikiBaseContainer}>
        <div className={s.contentWrapper}>
          <h3 className={s.title}>База знаний</h3>
          <p className={s.subtitle}>Максимально полезная информация</p>
        </div>
        <div className={s.iconWrapper}>
          <img
            className={s.referralIcon}
            src={
              'https://s3-alpha-sig.figma.com/img/65f2/9d8d/259385f7612d98204bd4f3023da5df52?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MCERG3Nd3LCbVNJCPoiXyOykAo6xYV15a~K7Kg-aUr4G3M89sPFPv3jL1c5JKDUwnm8keXaZTL3C77kvGXoG5zarF8DO4EGN~FDq2j8kxfSad8YkrJLYwK1byv2CFX475V6s7dcLWAyXbrEW6EUhjAlqr~0rO6D98kyBtVaQ6i9MNnHgPCux2vIErOAq~lpk7Z1iEsxXVusVu2GiCh86v81NT4UZEmrpAz1XKrBkvuMCKq~Q9BBKVViWKGyNY4V66TbxzWly7yYfe783n9EYnlsFm4BKyGNVP3v4vcHkjuApVagBJ45bGMmKpkxZNyNkIJl~3YcPiArbxjEfcfdB5Q__'
            }
            alt="Wiki Base"
          />
        </div>
      </div>
      <div className={s.wikiActionWrapper}>
        <CustomInput />
        <button className={s.wikiBaseActionBtn}>Отправить ссылку</button>
        <section className={s.tileWrapper}>
          <Tile>
            <span className={s.tileTitle}>Психология</span>
            <img
              width={92}
              src="https://s3-alpha-sig.figma.com/img/be9c/6252/a7515d723c45c4121fb962b1c1a875f7?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GL8uJgKDX4TDUzHQw5wFbrgzaFcNx2qeefjww6a4b9-aQuUDsi-dbXW3hMqkjb6BdhYGggssvgso1b77Jk7CJIsMZ02djjfptfiRSr16blyICSgHDjHAwv1lWbARSE1TaNpEgAaR8Z7PMdF5zbwp-NGOckJ1M1HjbbKcoqc2SJ-WaQDOb448wNTDK0-Ocxw7tPptaOh~BUdcRbEJT0RY--QFjL0nT53X3pIcoP6QldoKRJ1cDMJ3g3IXMfOeLWk9kweF16lMbf-R76klTMhE8Gq-X2rjlCL~2S1fUlLV-2AKWDblU2BbTpRfxVM1VNEzjEFbHAIqkukTe-9JVK5bXw__"
            />
          </Tile>
          <Tile>
            <span className={s.tileTitle}>Тех.анализ</span>
            <img
              width={92}
              src="https://s3-alpha-sig.figma.com/img/d1f9/8476/e6e1042c334e0f54fb9f213044ddd366?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ggQ2pVPUFYbGfPgxC8uhZd2jJY66Kc0XlCfIPPxJ8BU8Plpl7UFQ~o8Z0UEGrdcPu~kqI~fcR15opjRQnh6eBK~GyYh6udTmrrqdFUJuloD~cgJGV5ZOb-71J0J4nfjkY6NzegTVn6LHWDNh2d~nvFO5gyfhsGPDEEWfkIR44xEz429ShL17SF2QboKjnL3Gn~t2MuAkw5Uq1ZPcIMFAoBvCfVRwp8yjhgc6kQeZMyY0UtJR6SOCXfEPtZZTMmrEwZScXMEW3x83S2Da4D-8C1zyc4zYGURGFFJpgEqzSu4rTKpZRPR8hT39D~d7BYYDbCiuaeK1m2hkE98Y2LMPQA__"
            />
          </Tile>
          <Tile>
            <span className={s.tileTitle}>ТОП книг</span>
            <img
              width={92}
              src="https://s3-alpha-sig.figma.com/img/9ca2/db3b/50950b3a40c06d1d65b5c28724114805?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ocdq4o4ddk2Laa0Yc1~8tw2U-UzvP3MSuVL55pNLbR7jl-eSfaoJwuYFW17w0mEJe1YtJc8ourAfhCqjFhoMnuYmsWgXSILdlbnOgWeduQ4PHQhSA7OSV0h6bkJASvVvWTBlwSpfbypTPcXtW~8Np090LpvXcMQq3yXmo~RKY0eHrE3pO9iq9HUOLbFYh0tZiCd-r4QIstokKblUyAtxAZPpyrLnAWxj43qAGW3AaN35SIw~sgyIt3s2coWBd4Tk8k2KSSpPfMkgZd~khRiPGLnSrRv7V0bkfaMj6FySYqOGCmcd19-PzeN8m10Ca0LJMGmuWygwnwH-uUFNi--QHg__"
            />
          </Tile>
        </section>
      </div>
    </AppLayout>
  )
}
