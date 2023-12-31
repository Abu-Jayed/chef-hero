import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, redirect, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import Navbar from '../../Shared/Navbar';

const Register = () => {
  const {user,createUser,updateUser} = useContext(AuthContext)
  const [error,setError] = useState('')
  const navagate = useNavigate();

  const handleRegister = event =>{

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.img.value;
    const email = form.email.value;
    const password = form.password.value;
    form.reset()
    // console.log(name,imgUrl,email,password);

    if(email == password){
      return setError('email and password can not be same')
    } else if(password.length < 6){
      return setError('password must have 6 charectar')
    }
    // console.log('validation pass');

    createUser(email,password)
    .then(result =>{
      const createdUser = result.user;
      // console.log(createdUser);
      setError('')
      toast.success('user created successfully.')

      setTimeout(() => navagate('/'), 2000)

      updateUser(name,imgUrl)
      .then()
      .catch(err => {
        // console.log(err);
      })
    }).catch(err => {
      // console.log(err);
      setError(err.message)
    })
  }
  return (
    <>
    <Navbar></Navbar>
      <div className="text-black md:w-[666px] mx-auto rounded-3xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 p-10 mb-14 mt-14">
      <h3 className="text-center text-cyan-300 text-3xl font-bold tracking-wide mb-5">Register to your account</h3>
        <form className="w-96 mx-auto" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Image Url
              </span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="Image Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-gray-50 font-semibold tracking-wider">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <div  className="text-gray-100 tracking-wide  flex gap-12">
                <div className="flex">
                  <p className="mr-1">Have an account?</p>
                  <Link className="underline" to='/login'> Login</Link>
                </div>
              </div>
            </label>
          </div>
          <div className="form-control">
            <label className="flex gap-4 cursor-pointer mt-4">
              <input
                type="checkbox"
                className="border-2 border-white checkbox"
              />
              <span className="text-white">Remember me</span>
            </label>
          </div>
          <div className="form-control mt-6 mb-3">
            <button className="btn btn-warning">Register</button>
          </div>
        </form>
        {
          error
        }
      </div>
    </>
  );
};

export default Register;