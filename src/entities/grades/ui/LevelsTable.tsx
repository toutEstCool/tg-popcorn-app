import { useEffect } from 'react'
import s from './LevelsTable.module.css'
import { useAppSelector } from '../../../shared/hooks/useAppSelector'
import { useAppDispatch } from '../../../shared/hooks/useAppDispatch'
import { Loader } from '../../../shared/ui/Loader'
import { fetchGradesLevels } from '../model/selectors/fetchGradesLevels/fetchGradesLevels'

export const LevelsTable = () => {
  const dispatch = useAppDispatch()
  const grades = useAppSelector((state) => state.grades.grades)
  const isLoading = useAppSelector((state) => state.grades.isLoading)
  const error = useAppSelector((state) => state.grades.error)

  useEffect(() => {
    dispatch(fetchGradesLevels())
  }, [dispatch])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <p>Ошибка загрузки данных: {error}</p>
  }

  return (
    <section className={s.levelTable}>
      <h3 className={s.levelTableTitle}>Таблица уровней</h3>
      <ul className={s.levelTableWrapper}>
        {grades.map((grade) => (
          <li key={grade.level} className={s.levelTableItem}>
            <span className={s.levelTableItemCoinCount}>
              {grade.scoreToExclusive.toLocaleString('ru-RU')}.00
            </span>
            <span className={s.levelTableItemLevel}>
              LVL {grade.level}. {grade.grade}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
