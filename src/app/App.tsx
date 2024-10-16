import { router } from './providers/router'
import { MainProviders } from './providers/AppProvider'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <MainProviders>
      <RouterProvider router={router} />
    </MainProviders>
  )
}

export default App
