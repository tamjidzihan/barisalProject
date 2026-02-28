import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import apiClient from '../services/api-client';

export interface Account {
    username: string;
    role: 'user' | 'admin';
}

// Define types
interface AuthContextType {
    isLoggedIn: boolean;
    account: Account | null;
    token: string | null;
    register: (formData?: any) => Promise<boolean>;
    login: (formData?: any) => Promise<boolean>;
    updateUser: (formData?: any) => Promise<boolean>;
    getAllUsers: () => Promise<any[]>;
    updateRole: (userId: string, role: string) => Promise<boolean>;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}



// Initialize context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Export the consumer
export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

// Export the provider (handle all the logic here)
export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [account, setAccount] = useState<Account | null>(null); // Adjust type if necessary
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    const register = (formData: any = {}): Promise<boolean> => // Adjust formData type if necessary
        new Promise((resolve, reject) => {
            apiClient
                .post('/auth/register', formData)
                .then(({ data: { data: accountData, token: accessToken } }) => {
                    setAccount(accountData);
                    setToken(accessToken);
                    setIsLoggedIn(true);
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error?.response?.data?.message || error.message);
                });
        });

    const login = (formData: any = {}): Promise<boolean> => // Adjust formData type if necessary
        new Promise((resolve, reject) => {
            apiClient
                .post('/auth/login', formData)
                .then(({ data: { data: accountData, token: accessToken } }) => {
                    setAccount(accountData);
                    setToken(accessToken);
                    setIsLoggedIn(true);
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error?.response?.data?.message || error.message);
                });
        });

    const updateUser = (formData: any = {}): Promise<boolean> =>
        new Promise((resolve, reject) => {
            apiClient
                .put('/auth/update', formData, {
                    headers: { authorization: `Bearer ${token}` }
                })
                .then(({ data: { data: accountData } }) => {
                    setAccount(accountData);
                    resolve(true);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error?.response?.data?.message || error.message);
                });
        });

    const getAllUsers = (): Promise<any[]> =>
        new Promise((resolve, reject) => {
            apiClient
                .get('/auth/users', {
                    headers: { authorization: `Bearer ${token}` }
                })
                .then((res) => resolve(res.data))
                .catch((error) => {
                    console.error(error);
                    reject(error?.response?.data?.message || error.message);
                });
        });

    const updateRole = (userId: string, role: string): Promise<boolean> =>
        new Promise((resolve, reject) => {
            apiClient
                .put('/auth/role', { userId, role }, {
                    headers: { authorization: `Bearer ${token}` }
                })
                .then(() => resolve(true))
                .catch((error) => {
                    console.error(error);
                    reject(error?.response?.data?.message || error.message);
                });
        });

    const logout = (): void => {
        setIsLoggedIn(false);
        setAccount(null);
        setToken(null);
    }

    const loginWithToken = async (): Promise<void> => {
        try {
            const { data: { data: accountData, token: accessToken } } = await apiClient.get('/auth/login', {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            setAccount(accountData);
            setToken(accessToken);
            setIsLoggedIn(true);
        } catch (error: any) {
            console.error(error);
            if (error?.response?.status === 401) setToken(null);
        }
    }

    // This side effect keeps local storage updated with recent token value,
    // making sure it can be re-used upon refresh or re-open browser
    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    // This side effect runs only if we have a token, but no account or logged-in boolean.
    // This "if" statement is "true" only when refreshed, or re-opened the browser,
    // if true, it will then ask the backend for the account information (and will get them if the token hasn't expired)
    useEffect(() => {
        if (!isLoggedIn && !account && token) loginWithToken();
    }, [isLoggedIn, account, token]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                account,
                token,
                register,
                login,
                updateUser,
                getAllUsers,
                updateRole,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
