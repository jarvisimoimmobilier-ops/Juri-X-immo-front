import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditUserInfo = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100');

  const onSubmit = (data) => {
    console.log(data);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex justify-center items-center p-3 bg-gray-100">
      <div className="bg-white p-6 lg:px-10 lg:py-8 rounded-2xl shadow-lg max-w-lg w-full relative">
        <button
          onClick={toggleEdit}
          className="absolute top-0 right-0 m-4 bg-customBlue text-white rounded-full p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M15.586 2.586a2 2 0 00-2.828 0l-8.586 8.586a1 1 0 00-.293.707v3a1 1 0 001 1h3a1 1 0 00.707-.293l8.586-8.586a2 2 0 000-2.828zM5 15H4v-1l7.293-7.293 1 1L5 15zM13 6.414l-1-1L13 4.414l1 1-1 1z" />
          </svg>
        </button>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="imageUpload"
                className="absolute bottom-0 right-0 bg-customBlue text-white rounded-full p-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15.586 2.586a2 2 0 00-2.828 0l-8.586 8.586a1 1 0 00-.293.707v3a1 1 0 001 1h3a1 1 0 00.707-.293l8.586-8.586a2 2 0 000-2.828zM5 15H4v-1l7.293-7.293 1 1L5 15zM13 6.414l-1-1L13 4.414l1 1-1 1z" />
                </svg>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="John"
              {...register('name', { required: true })}
              className={`w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue ${
                errors.name ? 'border-red-500' : 'border-gray-200'
              }`}
              disabled={!isEditing}
            />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Surname</label>
            <input
              type="text"
              placeholder="Rogers"
              {...register('surname', { required: true })}
              className={`w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue ${
                errors.surname ? 'border-red-500' : 'border-gray-200'
              }`}
              disabled={!isEditing}
            />
            {errors.surname && <p className="text-red-500 text-sm">Surname is required</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              placeholder="Enter your title here"
              {...register('title')}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue border-gray-200"
              disabled={!isEditing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Registration Email</label>
            <input
              type="email"
              placeholder="john@gmail.com"
              {...register('email', { required: true })}
              className={`w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              disabled={!isEditing}
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            <span className="text-green-500 text-sm">Verified</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="+420 732123456"
              {...register('phone', { required: true })}
              className={`w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customBlue ${
                errors.phone ? 'border-red-500' : 'border-gray-200'
              }`}
              disabled={!isEditing}
            />
            {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}
            <span className="text-green-500 text-sm">Verified</span>
          </div>
      
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete account
            </button>
            {isEditing && (
              <button
                type="submit"
                className="bg-customBlue text-white py-2 px-4 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-customBlue"
              >
                Save Changes
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserInfo;
