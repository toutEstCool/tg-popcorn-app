import classNames from "classnames";
import s from "./BottomDrawer.module.css";
import { Button } from "../../Button";
import { Loader } from "../../Loader";

interface IBottomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: string;
  title: string | undefined;
  isLoading?: boolean;
  error?: string | null;
  btnText: string;
}

export const BottomDrawer = ({
  isOpen,
  onClose,
  icon,
  title,
  isLoading,
  btnText,
}: IBottomDrawerProps) => {
  return (
    <div className={classNames(s.overlay, { [s.open]: isOpen })}>
      {isLoading ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={s.sheetContent}>
          <button className={s.closeButton} onClick={onClose}>
            &times;
          </button>
          <div className={s.contentWrapper}>
            {icon && (
              <div className={s.iconWrapper}>
                <img className={s.icon} src={icon} alt="Invite Friends" />
              </div>
            )}
            <div className={s.inviteTextWrapper}>
              <p className={s.inviteText}>{title}</p>
            </div>
            <Button
              className={s.inviteButton}
              onClick={onClose}
              text={btnText}
            />
          </div>
        </div>
      )}
    </div>
  );
};
