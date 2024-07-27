import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/useAuth'

const Test = () => {
    const { isLoggedIn, account, token, register, login, logout } = useAuth();
    const navigate = useNavigate(); // Initialize useNavigate hook



    return (
        <div>
            <h1>Authentication Example</h1>
            {isLoggedIn ? (
                <div>
                    <p>Welcome, {account?.username}</p>
                    <p>you are a {account?.role}</p>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <div>
                        <button onClick={() => {
                            login({ username: 'test', password: 'password' })
                            navigate('/');

                        }}>Login</button>
                    </div>
                    <div>
                        <button onClick={() => register({ username: 'test', password: 'password' })}>Register</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;
