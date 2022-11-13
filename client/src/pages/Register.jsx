import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;


  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));    
  };


  return (
    <div className="max-md w-full p-4 pt-10 flex items-center justify-center">
      <div className="card max-w-lg w-96 bg-base-100 shadow-xl">
        <form className="card-body">
          <h2 className="card-title mb-10 text-3xl">회원가입 </h2>
          <div>
            <p className="font-bold pb-2">이름</p>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="name"
              className="input w-full max-w-xs"
            />
          </div>
          <div>
            <p className="font-bold pb-2">이메일</p>
            <input
              type="email"
              placeholder="Email"
              name='email'
              value={email}
              onChange={onChange} 
              className="input w-full max-w-xs"
            />
          </div>
          <div>
            <p className="font-bold pb-2">비밀번호</p>
            <input
              type="password"
              placeholder="Password"
              name='password'
              value={password}
              onChange={onChange} 
              className="input w-full max-w-xs mb-2"
            />
          </div>
          <div>
            <p className="font-bold pb-2">비밀번호 확인</p>
            <input
              type="password"
              placeholder="Password"
              name='password2'
              value={password2}
              onChange={onChange}
              className="input w-full max-w-xs mb-2"
            />
          </div>
          <p className="text-sm text-gray-400 underline-offset-1 underline">
            <Link to="/login">이미 회원이십니까?</Link>
          </p>
          <div className="card-actions justify-end">
            <button type="submit" className="btn mt-8">회원 가입</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
