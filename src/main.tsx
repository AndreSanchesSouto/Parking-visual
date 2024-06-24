import ReactDOM from 'react-dom/client'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <MainRoutes/>
  </BrowserRouter>
)
