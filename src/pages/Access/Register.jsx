import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <div className="text-center mx-auto p-5 md:p-10form-control w-full max-w-xs">
        <div className='mb-3'>
          <h3 className='text-3xl mb-5'>Registration!</h3>
          <span className="label-text">What is your Name?</span>
          <input type="email" placeholder="Enter Your name" name='name' className="input input-bordered w-full max-w-xs text-center mb-3" />
          <span className="label-text">E-mail ?</span>
          <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" />
          <span className="label-text">Create a password (at least 6 characters) </span>
          <input type="text" placeholder="Enter Your Name" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" />
          <button className="btn btn-outline  text-black-800">Sign up</button>
        </div>
        <div>
          <p>Do you already have an account?
            <br />
            <Link to='/access/login'>
              <span className='underline decoration-1'>Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;