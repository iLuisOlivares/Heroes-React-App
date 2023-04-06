import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/main', {
            replace: true
        });
    }

    return (
        <div className="vh-100  d-flex justify-content-center align-items-center">

            <div className="p-5 ">
                <h2 className="pb-4">Login</h2>
                <button className="btn btn-primary" onClick={onLogin}>Login</button>

            </div>


        </div>
    )
}