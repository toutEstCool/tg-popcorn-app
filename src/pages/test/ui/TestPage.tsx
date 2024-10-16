import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderWithBackButton } from '../../../shared/ui/HeaderWithBackButton'
import { AppLayout } from '../../../widgets/AppLayout'
import s from './TestPage.module.css'
import classNames from 'classnames'

type SelectedAnswers = {
  [key: number]: number | null
}

const questions = [
  {
    id: 1,
    text: 'Какая роль трейдера на криптовалютном рынке?',
    options: [
      'Инвестировать в долгосрочные проекты',
      'Проводить сделки по покупке и продаже криптовалют с целью получения прибыли',
      'Проводить сделки по покупке и продаже криптовалют с целью получения прибыли',
      'Контролировать объем эмиссии новых токенов'
    ]
  },
  {
    id: 2,
    text: 'Чем занимаются инвесторы на криптовалютном рынке?',
    options: [
      ' Поддерживают работу блокчейна',
      'Майнят новые монеты',
      'Вкладывают средства в крипто активы с целью долгосрочного удержания',
      'Контролируют транзакции на биржах'
    ]
  },
  {
    id: 3,
    text: 'Какую задачу выполняют майнеры?',
    options: [
      'Выпускают новые токены на рынок',
      'Обеспечивают безопасность сети путем подтверждения транзакций',
      'Контролируют колебания курса криптовалют',
      'Покупают и продают активы на бирже'
    ]
  },
  {
    id: 4,
    text: 'Что такое криптовалютная биржа?',
    options: [
      'Платформа для хранения криптовалют',
      'Платформа для торговли криптовалютами',
      'Сервис для создания криптографических кошельков',
      'Организация, контролирующая стоимость криптовалют'
    ]
  },
  {
    id: 5,
    text: 'Какие биржи считаются децентрализованными?',
    options: [
      'Те, которые управляются централизованными организациями',
      'Те, где управление осуществляется без посредников и контроля третьей стороны',
      'Те, где пользователи обязаны регистрироваться под контролем государственных органов',
      'Биржи, которые торгуют исключительно стейблкоинами'
    ]
  },
  {
    id: 6,
    text: 'Что такое ликвидность криптовалютного актива?',
    options: [
      'Способность актива быть купленным или проданным с минимальными изменениями в цене',
      'Доступность актива для майнинга',
      'Стабильность стоимости актива на рынке',
      'Объем монет, выпущенных майнерами за последний месяц'
    ]
  },
  {
    id: 7,
    text: 'Как волатильность влияет на криптовалютный рынок?',
    options: [
      'Волатильность не имеет влияния на цены криптовалют',
      'Чем выше волатильность, тем стабильнее цена актива',
      'Высокая волатильность может привести к резким изменениям стоимости криптовалюты',
      'Волатильность регулируется центральными банками'
    ]
  },
  {
    id: 8,
    text: 'Какую функцию выполняют инвесторы, по отношению к ликвидности рынка?',
    options: [
      'Понижают ликвидность путем долгосрочных вложений',
      'Увеличивают ликвидность, совершая активные торговые сделки',
      'Создают стабильность на рынке за счет удержания активов',
      'Уменьшают волатильность актива путем диверсификации'
    ]
  }
]

export const TestPage = () => {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
  const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswers>({})
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleOptionChange = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      setSelectedAnswers({
        ...selectedAnswers,
        [currentQuestionIndex]: selectedOption
      })
      setSelectedOption(null)

      if (currentQuestionIndex === questions.length - 1) {
        navigate('/test-finish')
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex === 0) {
      navigate(-1)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedOption(selectedAnswers[currentQuestionIndex - 1] ?? null)
    }
  }

  return (
    <AppLayout>
      <HeaderWithBackButton
        onClick={handlePreviousQuestion}
        title="Определи свой тип личности в трейдинге и инвестициях."
      />
      <section className={s.testWrapper}>
        <div className={s.testDescription}>
          <h4 className={s.testCountTitle}>Вопрос {currentQuestion.id}</h4>
          <span className={s.testQuestionDescription}>
            {currentQuestion.text}
          </span>
        </div>
        <ul className={s.testQuestionsWrapper}>
          {currentQuestion.options.map((option, index) => (
            <li key={index} className={s.testQuestionItem}>
              <label className={s.testQuestion}>
                <input
                  className={s.inputRadio}
                  type="radio"
                  name="option"
                  value={index}
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <span>{option}</span>
              </label>
            </li>
          ))}
        </ul>
        <button
          className={classNames(s.fixedButton, selectedOption === null && s.bg)}
          onClick={handleNextQuestion}
          disabled={selectedOption === null}
        >
          {currentQuestionIndex === questions.length - 1
            ? 'Завершить тест'
            : 'Пройти тест'}
        </button>
      </section>
    </AppLayout>
  )
}
