import { CSSProperties, memo } from 'react'
import s from './Skeleton.module.css'
import classNames from 'classnames'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, height, width, border } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return (
    <div className={classNames(s.Skeleton, {}, [className])} style={styles} />
  )
})
