import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="text-center mx-auto p-5 md:p-10form-control w-full max-w-xs">
        <div className='mb-3'>
          <h3 className='text-3xl mb-5'>Please, Login!</h3>
          <span className="label-text">What is your Email?</span>
          <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" />
          <span className="label-text">Enter your password?</span>
          <input type="text" placeholder="Enter Your Name" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" />
          <button className="btn btn-outline text-black-800">Login</button>
        </div>
        <div>
          <p>Do you need an account?
            <br />
            <Link to='/access/register'>
              <span className='underline decoration-1'>Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;