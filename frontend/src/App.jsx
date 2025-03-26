import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import OpenClone from "./OpenClone"

import './App.css'


function App() {
  const queryClient = new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>
      <OpenClone/>
    </QueryClientProvider>
  )
}

export default App
