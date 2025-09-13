import { Routes, Route } from 'react-router'
import NotFound from './pages/404';
import AuthRoutes from './routes/auth-routes';
import Home from './pages/home';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* {OtherRoutes()} */}
        {AuthRoutes()}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
