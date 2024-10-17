import { StateSchema } from '../../../../../../app/providers/store/ui/MainStore'

export const getTestInfoPreviewImage = (state: StateSchema) =>
  state?.test?.previewImageUrl || ''
