import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

import { toast } from "react-toastify";

function MyProfile() {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const [Duser, setDuser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const email = user.email;
      const url = `https://nameless-island-37356.herokuapp.com/user/${email}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setDuser(data));
    };
    getUser();
  }, [user]);

  const onSubmit = (data) => {
    const linkedin = data.linkedin;
    const twitter = data.twitter;
    const education = data.education;
    const location = data.location;
    const number = data.number;
    const userN = { linkedin, twitter, education, location, number };
  };
  return (
    <div>
      <div className="flex justify-around items-center gap-10 py-5">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
          </div>
        </div>
        <div>
          <h4>Name: {user.displayName}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Linkedin: {Duser?.linkedin || "Please give link"}</h4>
          <h4>Twitter: {Duser?.twitter || "Please give link"}</h4>
          <h4>Location: {Duser?.location || "please give location"}</h4>
          <h4>
            Education:
            {Duser?.education || "please give your Education deatails"}
          </h4>
          <h4>Number: {Duser?.number || "please give Number"}</h4>
        </div>
      </div>

      <form className="my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Education</span>
          </label>
          <input
            {...register("education")}
            type="text"
            placeholder="Education"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="Location"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Linkedin</span>
          </label>
          <input
            {...register("linkedin")}
            type="text"
            placeholder="Linkedin"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Twitter</span>
          </label>
          <input
            {...register("twitter")}
            type="text"
            placeholder="Twitter"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Number</span>
          </label>
          <input
            {...register("number")}
            type="number"
            placeholder="Number"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <input
          className="btn bg-black outline-none text-white hover:text-white w-full max-w-xs mt-5"
          type="submit"
          value="Update Profile"
        />
      </form>
    </div>
  );
}

export default MyProfile;
