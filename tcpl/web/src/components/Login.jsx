import { useState } from 'react';
import { navigate, routes } from '@redwoodjs/router'
import { Helmet } from "@redwoodjs/web"
import { useAuth } from "src/auth";

export default function Login() {
    const { logIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const handleLogIn = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await logIn({ email, password });
            navigate(routes.medecines());
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login | Xenon Pharmacy</title>
            </Helmet>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-green-800 sm:text-4xl lg:text-5xl">Se Connecter</h2>
                    </div>

                    <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={handleLogIn} method="POST">
                                    <div className="space-y-5">
                                        {error && <div className="text-red-500">{error}</div>}
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Addresse Email </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    required
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="Entrer votre adresse email"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="" class="text-base font-medium text-gray-900"> Mot de passe </label>
                                            </div>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    required
                                                    type="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="Entrer votre mot de passe"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none hover:bg-green-800 focus:bg-green-800" disabled={loading}>
                                            {loading ? 'En cours...' : 'Se connecter'}
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-base text-gray-600">Vous n'avez pas de compte? <a href="/auth/sign-up" title="" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Inscrivez-vous</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
