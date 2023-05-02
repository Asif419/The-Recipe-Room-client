import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)
  }

  return (
    <div>
      <div className="text-center mx-auto p-5 md:p-10 form-control w-full max-w-sm">
        <form onSubmit={handleLogin} className='mb-3'>
          <h3 className='text-3xl mb-5'>Please, Login!</h3>
          <span className="label-text">What is your Email?</span>
          <input type="email" placeholder="Enter Your E-mail" name='email' className="input input-bordered w-full max-w-xs text-center mb-3" required />
          <span className="label-text">Enter your password?</span>
          <input type="password" placeholder="Enter Your Password" name='password' className="input input-bordered w-full max-w-xs text-center mb-3" required />
          <button className="btn btn-outline text-black-800">Login</button>
        </form>
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