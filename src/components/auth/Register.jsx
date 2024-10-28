import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../services/authService';

const Register = () => {
    
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const [backendError, setBackendError] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New loading state
    const password = watch("password", "");
    const confirmPassword = watch("confirmPassword", "");
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            setBackendError("Les mots de passe ne correspondent pas.");
            return;
        }

        setIsLoading(true); // Set loading state to true
        setBackendError(''); // Clear any previous error messages

        try {
            const response = await apiService.register({
                username: data.username,
                email: data.email,
                password: data.password,
            });

            console.log('Registration successful:', response);
            reset();
            navigate('/login'); // Redirect on success
        } catch (error) {
            setBackendError(error.message);
        } finally {
            setIsLoading(false); // Set loading state back to false
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
                                <h1 className="text-xl font-bold text-gray-900 font-pj">Inscription</h1>
                                <p className="text-base font-normal text-gray-900 font-pj">
                                    Vous avez déjà un compte?{' '}
                                    <a
                                        href="/login"
                                        title=""
                                        className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        Connectez-vous
                                    </a>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="username" className="text-base font-medium text-gray-900 font-pj">
                                            Nom d'utilisateur
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                id="username"
                                                placeholder="Nom d'utilisateur"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('username', { required: 'Le nom d\'utilisateur est requis' })}
                                            />
                                            {errors.username && (
                                                <p className="mt-1 text-red-600">{errors.username.message}</p>
                                            )}
                                        </div>
                                    </div>

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
                                        <label htmlFor="password" className="text-base font-medium text-gray-900 font-pj">
                                            Mot de passe
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Mot de passe (min. 8 caractères)"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('password', { required: 'Le mot de passe est requis', minLength: { value: 8, message: 'Le mot de passe doit comporter au moins 8 caractères' } })}
                                            />
                                            {errors.password && (
                                                <p className="mt-1 text-red-600">{errors.password.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900 font-pj">
                                            Confirmer le mot de passe
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirmer le mot de passe"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('confirmPassword', { required: 'Veuillez confirmer votre mot de passe' })}
                                            />
                                            {errors.confirmPassword && (
                                                <p className="mt-1 text-red-600">{errors.confirmPassword.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative flex items-center mt-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                id="terms"
                                                className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                                                {...register('terms', { required: 'Vous devez accepter les conditions générales' })}
                                            />
                                        </div>
                                        <div className="ml-3 text-base">
                                            <label htmlFor="terms" className="font-normal text-gray-900 font-pj">
                                                J'accepte les conditions générales
                                            </label>
                                            {errors.terms && (
                                                <p className="mt-1 text-red-600">{errors.terms.message}</p>
                                            )}
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
                                        'Inscription'
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

export default Register;
