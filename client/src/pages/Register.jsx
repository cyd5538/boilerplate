import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { registers, reset } from '../feautures/auth/authSlice';
import { useForm } from "react-hook-form";
import LoadingSpinner from '../components/LoadingSpinner'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// toast options
const toastObject = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
}

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleRegister = (data, e) => {
    e.preventDefault()

    if (password !== password2) {
      toast("비밀번호가 일치하지 않습니다",toastObject)
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(registers(userData))
    }
  }

  useEffect(() => {
    if (isError) {
      toast(message, toastObject);
    }

    if (isSuccess || user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="max-md w-full p-4 pt-10 flex items-center justify-center">
      <div className="card max-w-lg w-96 bg-base-100 shadow-xl">
        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <h2 className="card-title mb-10 text-3xl">회원가입 </h2>
          <div>
            <p className="font-bold pb-2">이름</p>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="name"
              className="input w-full max-w-xs"
              maxLength = {10}
              {...register("name", {
                required: true,
                minLength: 2,
                onChange
              })}
            />
              {errors?.name?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
              {errors?.name?.type === "minLength" && <p className="text-sm text-red-400 mt-2">이름은 2글자 이상입니다.</p>}
          </div>
          <div>
            <p className="font-bold pb-2">이메일</p>
            <input
              type="email"
              placeholder="Email"
              name='email'
              value={email}
              className="input w-full max-w-xs"
              {...register("email", {
                required: true,
                onChange
              })}
            />
              {errors?.email?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
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
              {...register("password", {
                required: true,
                minLength: 6,
                onChange
              })}
            />
              {errors?.password?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
              {errors?.password?.type === "minLength" && <p className="text-sm text-red-400 mt-2">비밀번호는 6글자이상입니다</p>}
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
              {...register("password2", {
                required: true,
                minLength: 6,
                onChange
              })}
            />
              {errors?.password2?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
              {errors?.password2?.type === "minLength" && <p className="text-sm text-red-400 mt-2">비밀번호는 6글자이상입니다</p>}
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
