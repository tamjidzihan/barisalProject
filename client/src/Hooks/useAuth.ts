import { useState, useEffect } from 'react';
import apiClient from '../services/api-client'; // Ensure this path is correct

interface AuthState {
    isLoggedIn: boolean;
    account: any;
    token: string | null;
}

interface Account {
    username: string;
    role: 'user' | 'admin';
}

interface UseAuthReturn {
    isLoggedIn: boolean;
    account: Account;
    token: string | null;
    register: (formData: Record<string, any>) => Promise<boolean>;
    login: (formData: Record<string, any>) => Promise<boolean>;
    logout: () => void;
}

export const useAuth = (): UseAuthReturn => {
    const [state, setState] = useState<AuthState>({
        isLoggedIn: false,
        account: null,
        token: localStorage.getItem('token'),
    });

    const register = (formData: Record<string, any>): Promise<boolean> =>
        new Promise((resolve, reject) => {
            apiClient
                .post('/auth/register', formData)
                .then(({ data: { data: accountData, token: accessToken } }) => {
                    setState({
                        isLoggedIn: true,
                        account: accountData,
                        token: accessToken,
                    });
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    const errorMessage = error?.response?.data?.message || error.message;
                    reject(errorMessage);
                });
        });

    const login = (formData: Record<string, any>): Promise<boolean> =>
        new Promise((resolve, reject) => {
            apiClient
                .post('/auth/login', formData)
                .then(({ data: { data: accountData, token: accessToken } }) => {
                    setState({
                        isLoggedIn: true,
                        account: accountData,
                        token: accessToken,
                    });
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    const errorMessage = error?.response?.data?.message || error.message;
                    reject(errorMessage);
                });
        });

    const logout = () => {
        setState({
            isLoggedIn: false,
            account: null,
            token: null,
        });
        localStorage.removeItem('token');
    };

    const loginWithToken = async () => {
        try {
            const {
                data: { data: accountData, token: accessToken },
            } = await apiClient.get('/auth/login', {
                headers: {
                    authorization: `Bearer ${state.token}`,
                },
            });

            setState({
                isLoggedIn: true,
                account: accountData,
                token: accessToken,
            });
        } catch (error: any) {
            console.error(error);
            if (error?.response?.status === 401) {
                setState((prevState) => ({ ...prevState, token: null }));
            }
        }
    };

    useEffect(() => {
        if (state.token) {
            localStorage.setItem('token', state.token);
        } else {
            localStorage.removeItem('token');
        }
    }, [state.token]);

    useEffect(() => {
        if (!state.isLoggedIn && !state.account && state.token) {
            loginWithToken();
        }
    }, [state.isLoggedIn, state.account, state.token]);

    return {
        isLoggedIn: state.isLoggedIn,
        account: state.account,
        token: state.token,
        register,
        login,
        logout,
    };
};
