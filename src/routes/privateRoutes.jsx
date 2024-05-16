import { Outlet } from "react-router"
import SignUpPage from "../pages/signUpPage"

const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = user?.token 

    return (
        <>
            {
                token ? <Outlet /> : <SignUpPage /> 
            }
        </>
    )
}

export default PrivateRoutes
