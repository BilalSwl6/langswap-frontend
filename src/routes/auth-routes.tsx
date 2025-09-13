import { Route } from 'react-router';
import Login from './../pages/auth/Login'

const AuthRouter = () => {
    return (
        <Route path="/login" element={<Login />} />
    )
}

export default AuthRouter;
