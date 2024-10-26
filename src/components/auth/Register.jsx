import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

    const password = watch("password", "");

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
                                <h1 className="text-xl font-bold text-gray-900 font-pj">Sign Up</h1>
                                <p className="text-base font-normal text-gray-900 font-pj">
                                    Already have an account?{' '}
                                    <a
                                        href="/login"
                                        title=""
                                        className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-12">
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="username" className="text-base font-medium text-gray-900 font-pj">
                                            Username
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                id="username"
                                                placeholder="Username"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('username', { required: 'Username is required' })}
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
                                                placeholder="Email address"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('email', { required: 'Email is required' })}
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-base font-medium text-gray-900 font-pj">
                                            Password
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Password (min. 8 characters)"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
                                            />
                                            {errors.password && (
                                                <p className="mt-1 text-red-600">{errors.password.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900 font-pj">
                                            Confirm Password
                                        </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                placeholder="Confirm Password"
                                                className="block w-full px-4 py-4 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                                                {...register('confirmPassword', {
                                                    required: 'Please confirm your password',
                                                    validate: value => value === password || 'Passwords do not match'
                                                })}
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
                                                {...register('terms', { required: 'You must agree to the terms and conditions' })}
                                            />
                                        </div>
                                        <div className="ml-3 text-base">
                                            <label htmlFor="terms" className="font-normal text-gray-900 font-pj">
                                                I agree to the terms and conditions
                                            </label>
                                            {errors.terms && (
                                                <p className="mt-1 text-red-600">{errors.terms.message}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-full px-8 py-4 mt-5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                                >
                                    Sign up
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
