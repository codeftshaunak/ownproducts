import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

function HomeReview() {
  const [renduser, setRenduser] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((resp) => resp.json())
      .then((data) => setRenduser(data.results));
  }, []);

  return (
    <>
      <h1 className="text-center pt-9">Reviews</h1>
      <div class="carousel carousel-center max-w-lg p-4 mt-8 mb-8 space-x-4 bg-neutral rounded-box m-auto">
        {renduser.map((data) => {
          const { name, picture, email } = data;
          return (
            <>
              <div className="carousel-item">
                <div className="singleitem">
                  <h3>{name.first}</h3>
                  <h6>{email}</h6>
                  <div className="revcon">
                    <img src={picture.large} alt="" />
                    <p className="des">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laborum, quia.
                    </p>
                  </div>
                  <div className="rateing">
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default HomeReview;
