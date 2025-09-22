import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { apiService } from '../../services/authService.js';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [backendError, setBackendError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    // Watch password for strength calculation
    const password = watch('password', '');

    // Password strength calculator
    const getPasswordStrength = () => {
        if (!password) return { strength: 0, text: '', color: 'bg-gray-200' };
        
        let strength = 0;
        
        // Length check
        if (password.length >= 6) strength++;
        if (password.length >= 8) strength++;
        
        // Character variety checks
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        
        const strengthLevels = [
            { strength: 0, text: '', color: 'bg-gray-200' },
            { strength: 1, text: 'Très faible', color: 'bg-red-500' },
            { strength: 2, text: 'Faible', color: 'bg-orange-500' },
            { strength: 3, text: 'Moyen', color: 'bg-yellow-500' },
            { strength: 4, text: 'Fort', color: 'bg-green-500' },
            { strength: 5, text: 'Très fort', color: 'bg-green-600' }
        ];
        
        return strengthLevels[strength] || strengthLevels[0];
    };

    const passwordStrength = getPasswordStrength();

    const onSubmit = async (data) => {
        setIsLoading(true);
        setBackendError(''); // Clear any previous errors
        
        try {
            const response = await apiService.login({
                email: data.email,
                password: data.password,
            });
            console.log('Login successful:', response);
            navigate('/conversations');
        } catch (error) {
            setBackendError(error.message || 'Une erreur est survenue lors de la connexion');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <section className="w-full min-h-screen py-4 sm:py-8 lg:py-16 bg-gray-50 relative overflow-hidden">
                {/* Animated background blobs */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -inset-10 opacity-50">
                        <div className="absolute top-0 -left-4 w-40 h-40 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-40 h-40 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-40 h-40 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                        <div className="absolute bottom-0 right-20 w-40 h-40 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    </div>
                </div>
                
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                    <div className="relative max-w-sm sm:max-w-md mx-auto lg:max-w-lg">
                        {/* Animated gradient border */}
                        <div className="absolute -inset-2 sm:-inset-4">
                            <div
                                className="w-full h-full mx-auto rounded-2xl sm:rounded-3xl opacity-75 blur-lg filter animate-gradient"
                                style={{
                                    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                                    backgroundSize: '400% 400%',
                                }}
                            ></div>
                        </div>

                        <div className="relative overflow-hidden bg-white/95 backdrop-blur-lg shadow-xl rounded-xl sm:rounded-2xl border border-white/20">
                            <div className="p-4 sm:px-8 sm:py-8">
                                {/* Back button */}
                                <div className="mb-4">
                                    <button
                                        onClick={() => navigate('/')}
                                        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                    >
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Retour
                                    </button>
                                </div>

                                {/* Responsive header - Improved mobile layout */}
                                <div className="mb-6 sm:mb-8">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-pj mb-2">
                                        Connexion
                                    </h1>
                                    <p className="text-sm sm:text-base font-normal text-gray-600 font-pj">
                                        Pas de compte?{' '}
                                        <a
                                            href="/register"
                                            className="font-semibold text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
                                        >
                                            Rejoignez-nous
                                        </a>
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                                    {/* Email field */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-900 font-pj mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Adresse e-mail"
                                            className="block w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 caret-gray-900 transition-all duration-200"
                                            {...register('email', { 
                                                required: 'L\'email est requis',
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: 'Adresse email invalide'
                                                }
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-xs sm:text-sm text-red-600">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                   {/* Password field */}
<div>
  <div className="flex items-center justify-between mb-2">
    <label htmlFor="password" className="text-sm sm:text-base font-medium text-gray-900 font-pj">
      Mot de passe
    </label>
    {/* <a
      href="/forgot-password"
      className="text-xs sm:text-sm font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
    >
      Mot de passe oublié?
    </a> */}
  </div>

  {/* keep only the input + eye inside this relative wrapper */}
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      id="password"
      placeholder="Mot de passe (min. 6 caractères)"
      className="block w-full px-4 py-3 sm:py-4 pr-12 text-sm sm:text-base text-gray-900
                 placeholder-gray-500 bg-white/50 backdrop-blur-sm border
                 border-gray-300 rounded-lg sm:rounded-xl focus:border-blue-500
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 caret-gray-900
                 transition-all duration-200"
      {...register('password', {
        required: 'Le mot de passe est requis',
        minLength: { value: 6, message: 'Le mot de passe doit comporter au moins 6 caractères' }
      })}
    />

    {/* Show/Hide password button – pinned to input center */}
    <button
      type="button"
      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
    >
      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
    </button>
  </div>

  {/* render strength indicator OUTSIDE the relative wrapper */}
  {password && (
    <div className="mt-2">
      {/* ... strength label + bar exactly as you had ... */}
    </div>
  )}

  {errors.password && (
    <p className="mt-1 text-xs sm:text-sm text-red-600">
      {errors.password.message}
    </p>
  )}
</div>


                                    {/* Remember me checkbox */}
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="rememberMe"
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            {...register('rememberMe')}
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 text-sm font-normal text-gray-700 font-pj">
                                            Se souvenir de moi
                                        </label>
                                    </div>

                                    {/* Backend error message */}
                                    {backendError && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-sm text-red-600 font-medium">
                                                {backendError}
                                            </p>
                                        </div>
                                    )}

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="flex items-center justify-center w-full px-6 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 border border-transparent rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Connexion en cours...
                                            </>
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
        </>
    );
};

export default LoginForm;