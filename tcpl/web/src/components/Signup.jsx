import { useState } from 'react';
import { Helmet } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import { useAuth } from 'src/auth';

export default function Signup() {
    const { signUp } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSignup = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.target);

        const firstName = formData.get('firstName');
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await signUp({ email, password });
            navigate(routes.medecines());
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCheckboxChange = () => {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = !checkbox.checked;
    };

    return (
        <>
            <Helmet>
                <title>Sign-Up | Xenon Pharmacy</title>
            </Helmet>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold leading-tight text-green-800 sm:text-4xl lg:text-5xl">Création de compte</h2>
                        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Vous pouvez obtenir un compte en 2 minutes !</p>
                    </div>

                    <div className="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div className="overflow-hidden bg-white rounded-md shadow-md">
                            <div className="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={handleSignup}>
                                    <div className="space-y-5">
                                        {error && <div className="text-red-500">{error}</div>}
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Prénom & Nom </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                                    </svg>

                                                </div>

                                                <input
                                                    required
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="Taper votre nom complet"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

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
                                                    name="email"
                                                    id="email"
                                                    placeholder="Entrer votre addresse email"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Mot de passe </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                                                    </svg>
                                                </div>

                                                <input
                                                    required
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Entrer votre mot de passe"
                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <input type="checkbox" name="agree" id="agree" className="w-5 h-5 text-green-800 bg-white border-gray-200 rounded" onChange={handleCheckboxChange} />
                                            <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                                                J'ai lu(e) et accepté(e) <a href="#" title="" className="text-green-800 hover:text-green-800 hover:underline">les Termes de Services</a> et <a href="#" title="" className="text-green-800 hover:text-green-800 hover:underline">la Politique de Confidentialité</a>
                                            </label>
                                        </div>


                                        <div>
                                            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none hover:bg-green-800 focus:bg-green-800" disabled={loading}>
                                                {loading ? 'En cours...' : 'S\'inscrire'}
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-base text-gray-600">Vous disposez déjà de compte? <a href="/auth/login" title="" className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Connectez-vous</a></p>
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
