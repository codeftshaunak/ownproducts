import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Shared/Spinner/Spinner";
import useToken from "../../hooks/useToken";
import { toast, ToastContainer } from "react-toastify";

function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, uperror] = useUpdateProfile(auth);
  const [token] = useToken(user || guser);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [navigate, token, from]);
  if (loading || updating) {
    return <Spinner />;
  }

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    toast.success("Yooh! Signup done.");
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
    toast.success("Yooh! Signin With Google done.");
  };

  let signError;

  if (loading || updating || gloading) {
    return <Spinner></Spinner>;
  }
  if (error || uperror || gerror) {
    signError = <p>{error.message || uperror.error || gerror.error}</p>;
  }

  return (
    <>
      <div className="login">
        <div className="card w-96 bg-base-100 shadow-xl m-auto">
          <div className="card-body">
            <h1 className="text-center text-secondary-content">SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field Start*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name Is Required!",
                    },
                    minLength: {
                      value: 3,
                      message: "Name Must Be Upto 6 Character",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                  {errors.name?.type === "minLength" && (
                    <span className="label-text-alt text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Name Field End */}
              {/* Email Field Start */}
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
                    required: {
                      value: true,
                      message: "Email Is Required!",
                    },
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
              {/* Email Field End */}
              {/* Password Field Start */}
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
                    required: {
                      value: true,
                      message: "Password Is Required!",
                    },
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
              {/* Password Field End */}
            </form>
            <p className="text-white text-xs">
              Already Have An Account?
              <Link to="../../login" className="text-cyan-400 pl-1">
                Please Login Here.
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
      <ToastContainer />
    </>
  );
}

export default SignUp;
