import { Helmet } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { toast } from '@redwoodjs/web/toast'

export default function Signup() {

    const CREATE_USER_MUTATION = gql`
    mutation CreateUserMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        id
      }
    }
  `

    const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
        onCompleted: () => {
            toast.success('Successfully created an account !')
            navigate(routes.medicament())
        },
        onError: (error) => {
            toast.error(error.message)
        },
    })

    const handleSignup = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        const firstName = formData.get('firstName');
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await createUser({
                variables: {
                    input: {
                        firstName,
                        email,
                        password
                    }
                }
            });
            setName(firstName);
        } catch (error) {
            console.error('Error signing up:', error);
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
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-green-800 sm:text-4xl lg:text-5xl">Création de compte</h2>
                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Vous pouvez obtenir un compte en 2 minutes !</p>
                    </div>

                    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={handleSignup}>
                                    <div class="space-y-5">
                                        <div>
                                            <label for="firstName" class="text-base font-medium text-gray-900"> Prénom & Nom </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="Taper votre nom complet"
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="email" class="text-base font-medium text-gray-900"> Addresse Email </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Entrer votre addresse email"
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="password" class="text-base font-medium text-gray-900"> Mot de passe </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Entrer votre mot de passe"
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-green-800 caret-green-800"
                                                />
                                            </div>
                                        </div>

                                        <div class="flex items-center">
                                            <input type="checkbox" name="agree" id="agree" class="w-5 h-5 text-green-800 bg-white border-gray-200 rounded" onChange={handleCheckboxChange} />
                                            <label for="agree" class="ml-3 text-sm font-medium text-gray-500">
                                                J'ai lu(e) et accepté(e) <a href="#" title="" class="text-green-800 hover:text-green-800 hover:underline">les Termes de Services</a> et <a href="#" title="" class="text-green-800 hover:text-green-800 hover:underline">la Politique de Confidentialité</a>
                                            </label>
                                        </div>

                                        <div>
                                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-green-800 border border-transparent rounded-md focus:outline-none hover:bg-green-800 focus:bg-green-800" disabled>
                                                S'inscrire
                                            </button>
                                        </div>

                                        <div class="text-center">
                                            <p class="text-base text-gray-600">Vous disposez déjà de compte? <a href="/auth/login" title="" class="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline">Connectez-vous</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
