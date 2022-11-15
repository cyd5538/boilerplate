import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, reset } from '../feautures/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner'
import { useForm } from "react-hook-form";


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

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
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


    useEffect(() => {
        if (isError) {
            toast(message, toastObject)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onSubmit = (data, e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
    }

    if (isLoading) {
        return <LoadingSpinner />
    }
    
    return (
        <div className='max-md w-full p-4 pt-10 flex items-center justify-center'>
            <div className="card max-w-lg w-96 bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="card-title mb-10 text-3xl">Login </h2>
                    <div>
                        <p className='font-bold pb-2'>이메일</p>
                        <input
                            type="text"
                            name='email'
                            value={email}
                            placeholder="Email"
                            className="input w-full max-w-xs"
                            {...register("email", {
                                required: true,
                                onChange
                            })}
                        />
                        {errors?.email?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
                    </div>
                    <div>
                        <p className='font-bold pb-2'>비밀번호</p>
                        <input
                            type="password"
                            name='password'
                            value={password}
                            placeholder='비밀번호'
                            className="input w-full max-w-xs mb-2"
                            {...register("password", {
                                required: true,
                                onChange
                            })}
                        />
                        {errors?.password?.type === "required" && <p className="text-sm text-red-400 mt-2">빈 항목은 안돼요 ❌</p>}
                        </div>
                        <p className='text-sm text-gray-400 underline-offset-1 underline'>
                            <Link to="/register">회원이 아니십니까?</Link>
                        </p>
                        <div className="card-actions justify-end">
                            <button type="submit" className="btn mt-8">로그인</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Login