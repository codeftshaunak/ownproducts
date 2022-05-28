import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./Login.css";
import Spinner from "../../Shared/Spinner/Spinner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [token] = useToken(user || guser);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
    toast.success("Yooh! Signin With Google done.");
  };

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    toast.success("Yooh! Sign In Success.");
  };

  let signError;
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, token, from]);

  if (loading || gloading) {
    return <Spinner></Spinner>;
  }
  if (error || gerror) {
    signError = <p>{error.message || gerror.message}</p>;
  }

  return (
    <>
      <div className="login">
        <div className="card w-96 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h1 className="text-center text-secondary-content">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: { value: true, message: "Email Is Required!" },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide A Valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-400">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: { value: true, message: "Password Is Required!" },
                    minLength: {
                      value: 6,
                      message: "Must Be In 6 Character",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-400">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signError}
              <input
                type="submit"
                value="Submit"
                className="btn glass text-white w-full max-w-xs"
              />
            </form>
            <p className="text-white text-xs">
              Are you new here?
              <Link to="../../signup" className="text-cyan-400 pl-1">
                Create an new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              className="btn btn-outline btn-info"
              onClick={handleSignInWithGoogle}
            >
              <span className="pr-3 text-xl">
                <FcGoogle />
              </span>
              LogIn With Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
