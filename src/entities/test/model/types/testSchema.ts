export interface FetchTestsParams {
  skip: number
  take: number
}

export interface TestCase {
  caseNumber: number
  description: string
  imageUrl?: string | null
}

export interface Question {
  question: string
  imageUrls: string[]
  testCases: TestCase[]
  isRequired: boolean
  allowMultipleAnswers: boolean
}

export interface TestInfo {
  testId: number
  lectureId: number
  title: string
  description: string
  scoreForAttempt: number
  previewImageUrl: string
  alreadyParticipated: boolean
  questions: Question[]
}
