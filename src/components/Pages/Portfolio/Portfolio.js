import React from "react";

function MyPortfolio() {
  return (
    <div className="my-10 px-14 lg:px-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[394px] h-[455px] shadow-lg"
            src="https://i.ibb.co/7zztxNS/DSC08896.jpg"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title text-3xl font-bold">Sagar Dey</h3>
          <p className="font-bold text-xl">Email: sagardeyyash19@gmail.com</p>
          <p className="font-bold text-xl">
            Education: Diploma In Electronics [2016-17]
          </p>
          <p className="font-bold text-xl">
            Skills: Html, CSS, Bootstrap, TailwindCSS, Javascript, ES6,
            React.Js, React Router, React Query, AOS, Firebase, Node.Js,
            Express.Js, MongoDB
          </p>
          <p className="font-bold text-sm flex flex-col lg:flex-row justify-center items-center gap-2 ">
            Some Projects click to see:
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://memory-game-webapp.netlify.app"
              target="_blank"
            >
              Memory Game With JS
            </a>
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://food-recipe-webaplication.netlify.app"
              target="_blank"
            >
              Food Recipe WebApp
            </a>
            <a
              className="btn btn-md btn-primary mx-2"
              href="https://github-devfinder.netlify.app"
              target="_blank"
            >
              Github Dev Finder
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
