import s from './UserAvatar.module.css'
import { AppImage } from '../AppImg/AppImage'
import { Skeleton } from '../Skeleton'
import classNames from 'classnames'
import { CSSProperties, useMemo } from 'react'
import { Aperture } from 'lucide-react'

interface IAvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const UserAvatar = ({ src, size, alt }: IAvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  )
  const fallback = <Skeleton width={size} height={size} border="10px" />
  const errorFallback = (
    <div className={s.notUserAvatar}>
      <Aperture color="white" />
    </div>
  )

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(s.avatarImage)}
    />
  )
}
