import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../services/authService.js'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [backendError, setBackendError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setIsLoading(true); // Set loading state to true
        try {
            const response = await apiService.login({
                email: data.email,
                password: data.password,
            });
            console.log('Login successful:', response);
            navigate('/avatars'); // Redirect on success
        } catch (error) {
            setBackendError(error.message);
        }finally{
            setIsLoading(false); // Set loading state to true
        }

    };

    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative max-w-md mx-auto lg:max-w-lg">
                    <div className="absolute -inset-2">
                        <div
                            className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
                            style={{
                                background:
                                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                            }}
                        ></div>
                    </div>

                    <div className="relative overflow-hidden bg-white shadow-xl rounded-xl">
                        <div className="px-4 py-6 sm:px-8">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-bold text-gray-900 font-pj">Connexion</h1>
                                <p className="text-base font-normal text-gray-900 font-pj">
                                    Vous n'avez pas de compte?{' '}
                                    <a
                                        href="/register"
                                        title=""
                                        className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        Rejoignez-nous
                                    </a>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="text-base font-medium text-gray-900 font-pj">
                                            Email
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                id="email"
                                                placeholder="Adresse e-mail"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('email', { required: 'L\'email est requis' })}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-base font-medium text-gray-900 font-pj">
                                                Mot de passe
                                            </label>
                                            <a
                                                href="#"
                                                title=""
                                                className="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                            >
                                                Mot de passe oublié?
                                            </a>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Mot de passe (min. 8 caractères)"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('password', { required: 'Le mot de passe est requis', minLength: { value: 6, message: 'Le mot de passe doit comporter au moins 6 caractères' } })}
                                            />
                                            {errors.password && (
                                                <p className="mt-1 text-red-600">{errors.password.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                                {...register('rememberMe')}
                                            />
                                        </div>
                                        <div className="ml-3 text-base">
                                            <label htmlFor="terms" className="font-normal text-gray-900 font-pj">
                                                Se souvenir de moi
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {backendError && (
                                    <p className="mt-4 text-red-600 font-medium">
                                        {backendError}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={isLoading} // Disable button when loading
                                    className="flex items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? (
                                        <span className="loader mr-2 w-5 h-5 border-2 border-t-transparent
                                         border-white rounded-full animate-spin"></span>
                                    ) : (
                                        'Connexion'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
