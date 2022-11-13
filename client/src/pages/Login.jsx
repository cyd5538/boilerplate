import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div className='max-md w-full p-4 pt-10 flex items-center justify-center'>
        <div className="card max-w-lg w-96 bg-base-100 shadow-xl">
            <form className="card-body">
                <h2 className="card-title mb-10 text-3xl">Login </h2>
                <div>
                    <p className='font-bold pb-2'>이메일</p>
                    <input type="email" placeholder="Email" className="input w-full max-w-xs" />
                </div>
                <div>
                    <p className='font-bold pb-2'>비밀번호</p>
                    <input type="password" placeholder="PASSWORD" className="input w-full max-w-xs mb-2" />
                </div>
                <p className='text-sm text-gray-400 underline-offset-1 underline'>
                    <Link to="/register">회원이 아니십니까?</Link>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn mt-8">로그인</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login