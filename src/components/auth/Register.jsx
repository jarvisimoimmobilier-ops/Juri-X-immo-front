import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { apiService } from '../../services/authService';

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const [backendError, setBackendError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');
  const navigate = useNavigate();

  // Password strength calculator
  const getPasswordStrength = () => {
    if (!password) return { strength: 0, text: '', color: 'bg-gray-200' };
    let strength = 0;
    if (password.length >= 6) strength++;
    if (password.length >= 8) strength++;
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
    if (data.password !== data.confirmPassword) {
      setBackendError('Les mots de passe ne correspondent pas.');
      return;
    }

    setIsLoading(true);
    setBackendError('');

    try {
      const response = await apiService.register({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      console.log('Registration successful:', response);
      reset();
      navigate('/login');
    } catch (error) {
      setBackendError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen py-4 sm:py-8 lg:py-16 bg-gray-50 relative overflow-hidden">
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

              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 font-pj mb-2">
                  Inscription
                </h1>
                <p className="text-sm sm:text-base font-normal text-gray-600 font-pj">
                  Vous avez déjà un compte?{' '}
                  <a
                    href="/login"
                    className="font-semibold text-blue-600 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-colors duration-200"
                  >
                    Connectez-vous
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                {/* Username field */}
                <div>
                  <label htmlFor="username" className="block text-sm sm:text-base font-medium text-gray-900 font-pj mb-2">
                    Nom d'utilisateur
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Nom d'utilisateur"
                    className="block w-full px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 caret-gray-900 transition-all duration-200"
                    {...register('username', {
                      required: "Le nom d'utilisateur est requis",
                      minLength: {
                        value: 3,
                        message: "Le nom d'utilisateur doit comporter au moins 3 caractères"
                      }
                    })}
                  />
                  {errors.username && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors.username.message}
                    </p>
                  )}
                </div>

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
                      required: "L'email est requis",
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
                  <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-900 font-pj mb-2">
                    Mot de passe
                  </label>

                  {/* Only input + eye inside relative */}
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="Mot de passe (min. 8 caractères)"
                      className="block w-full px-4 py-3 sm:py-4 pr-10 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 caret-gray-900 transition-all duration-200"
                      {...register('password', {
                        required: 'Le mot de passe est requis',
                        minLength: {
                          value: 8,
                          message: 'Le mot de passe doit comporter au moins 8 caractères'
                        }
                      })}
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {/* Password strength indicator (outside relative) */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="text-gray-600">Force du mot de passe:</span>
                        <span
                          className={`font-medium ${
                            passwordStrength.text === 'Très fort'
                              ? 'text-green-600'
                              : passwordStrength.text === 'Fort'
                              ? 'text-green-500'
                              : passwordStrength.text === 'Moyen'
                              ? 'text-yellow-500'
                              : passwordStrength.text === 'Faible'
                              ? 'text-orange-500'
                              : 'text-red-500'
                          }`}
                        >
                          {passwordStrength.text}
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                          style={{ width: `${passwordStrength.strength * 20}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {errors.password && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password field */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm sm:text-base font-medium text-gray-900 font-pj mb-2">
                    Confirmer le mot de passe
                  </label>

                  {/* Only input + eye inside relative */}
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      placeholder="Confirmer le mot de passe"
                      className="block w-full px-4 py-3 sm:py-4 pr-10 text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-lg sm:rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500 caret-gray-900 transition-all duration-200"
                      {...register('confirmPassword', {
                        required: 'Veuillez confirmer votre mot de passe',
                        validate: (value) => value === password || 'Les mots de passe ne correspondent pas'
                      })}
                    />
                    <button
                      type="button"
                      aria-label={showConfirmPassword ? 'Masquer la confirmation' : 'Afficher la confirmation'}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {/* Password match indicator (outside relative) */}
                  {confirmPassword && (
                    <div className="mt-2">
                      <div className="flex items-center text-xs sm:text-sm">
                        {password === confirmPassword ? (
                          <span className="text-green-600 font-medium">✓ Les mots de passe correspondent</span>
                        ) : (
                          <span className="text-red-600 font-medium">✗ Les mots de passe ne correspondent pas</span>
                        )}
                      </div>
                    </div>
                  )}

                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Terms checkbox */}
                <div className="flex items-start">
                  <div className="flex items-center h-5 mt-1">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      {...register('terms', { required: 'Vous devez accepter les conditions générales' })}
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="terms" className="text-sm font-normal text-gray-700 font-pj">
                      J'accepte les{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-700 hover:underline">
                        conditions générales
                      </a>{' '}
                      et la{' '}
                      <a href="/privacy" className="text-blue-600 hover:text-blue-700 hover:underline">
                        politique de confidentialité
                      </a>
                    </label>
                    {errors.terms && (
                      <p className="mt-1 text-xs sm:text-sm text-red-600">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>
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
                      Inscription en cours...
                    </>
                  ) : (
                    'Créer mon compte'
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
