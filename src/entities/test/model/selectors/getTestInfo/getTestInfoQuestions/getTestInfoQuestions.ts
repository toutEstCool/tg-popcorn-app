import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfoQuestions = (state: StateSchema) =>
  state?.test?.questions || []
