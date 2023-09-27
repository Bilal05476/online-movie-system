import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchmovie, postReview } from "../../endPoint";
import { FaStar } from "react-icons/fa";
import { FormTextArea } from "../../../common/FormInput";
import BtnBlock from "../../../common/BtnBlock";
import { useStateValue } from "../../../StateProvider";

const MovieScreen = () => {
  const params = useParams();
  const [movie, setMovie] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [{ user }] = useStateValue();

  useEffect(() => {
    fetchmovie(params.slug, setMovie);
  }, []);

  const handleAddReview = () => {
    const reviews = {
      reviews: { user: user._id, rating, text },
    };
    console.log(reviews);
    // postReview(movie._id, reviews, setMovie);
  };
  return (
    <div className="container-fluid movie-screen py-5">
      <div className="container">
        <div className="row d-flex align-items-center movie-content">
          <div className="left col-12 col-md-7">
            <div className="row">
              <div className="col-12 col-md-4 banner-container">
                <img src={movie?.bannerImage} alt={movie?.title} />
              </div>
              <div className="col-12 col-md-6 content-container p-2 px-4">
                <h3>{movie?.title}</h3>
                <p>{movie?.description}</p>
                <div className="movie-actors">
                  Actors:{" "}
                  {movie?.actors?.map((item, ind) => (
                    <span key={ind}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right col-12 col-md-5">
            <video src={movie?.video} alt={movie?.title}></video>
          </div>
        </div>
        <div className="row movie-reviews">
          <div className="col-12 col-md-7 reviews-lists">
            {movie?.reviews?.map((item) => (
              <ReviewBlock key={item._id} item={item} />
            ))}
          </div>
          <div className="col-12 col-md-5 add-reviews">
            <div className="mb-3">
              {[...Array(5)].map((star, ind) => {
                const currIndex = ind + 1;
                return (
                  <label key={star}>
                    <input
                      type="radio"
                      name="rating"
                      value={currIndex}
                      onClick={() => setRating(currIndex)}
                    />
                    <FaStar
                      className="star"
                      size={25}
                      color={currIndex <= (hover || rating) ? "gold" : "gray"}
                      onMouseEnter={() => setHover(currIndex)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <FormTextArea
              rows={3}
              label={"Enter review here..."}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <BtnBlock
              text="Add Review"
              bgcolor="crimson"
              click={() => handleAddReview()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewBlock = ({ item }) => {
  return (
    <div className="review-item">
      <h3 className="text-light m-0">{item.user.name}</h3>
      {[...Array(item.rating)].map((icon) => (
        <FaStar key={icon} color="gold" />
      ))}
      {[...Array(5 - item.rating)].map((icon) => (
        <FaStar key={icon} color="gray" />
      ))}
      <p className="text-light m-0 my-2">{item.text}</p>
    </div>
  );
};
export default MovieScreen;
