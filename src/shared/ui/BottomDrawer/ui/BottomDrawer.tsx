import classNames from 'classnames'
import s from './BottomDrawer.module.css'
import { Button } from '../../Button'
import { Loader } from '../../Loader'

interface IBottomDrawerProps {
  isOpen: boolean
  onClose: () => void
  icon?: string
  title: string | undefined
  isLoading?: boolean
  error?: string | null
}

export const BottomDrawer = ({
  isOpen,
  onClose,
  icon,
  title,
  isLoading
}: IBottomDrawerProps) => {
  return (
    <div className={classNames(s.overlay, { [s.open]: isOpen })}>
      <div className={s.sheetContent}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        {isLoading ? (
          <Loader className={s.loader} />
        ) : (
          <div className={s.contentWrapper}>
            <div className={s.iconWrapper}>
              <img className={s.icon} src={icon} alt="Invite Friends" />
            </div>
            <div className={s.inviteTextWrapper}>
              <p className={s.inviteText}>{title}</p>
            </div>
            <Button
              className={s.inviteButton}
              onClick={onClose}
              text="Пригласить друзей"
            />
          </div>
        )}
      </div>
    </div>
  )
}
