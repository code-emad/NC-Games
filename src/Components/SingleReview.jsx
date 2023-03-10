import { useEffect, useState } from "react";
import { getReviewById } from "../Utils/api";
import { useParams } from "react-router-dom";
import Comments from './Comments'
import Votes from './Votes'

export default function SingleReview() {
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [error, setError] = useState(null)

  useEffect(() => {
    if (review_id)
      getReviewById(review_id).then((review) => {
        setReview(review);
      })
      .catch(err => setError(err));
  }, [review_id]);

  const searchedReview = !review.hasOwnProperty("review_body") ? (
    <p></p>
  ) : (
    <section className="singleReview">
      <h3>
        {review.review_id}. {review.title}
      </h3>
      <p>
        User: {review.owner} @{" "}
        {review.created_at?.slice(0, 16).replace("T", " ")}
      </p>
      <img src={review.review_img_url} alt="pic_of_game" height="100px" />
      <p>Review: {review.review_body}</p>
      <p>Designer: {review.designer}</p>
      <p>Category: {review.category}</p>
      <p>Comment count: {review.comment_count}</p>
      <Votes votes={review.votes} review_id={review.review_id} />
    </section>
  );

  if (error) {return <p>{error.response.data.msg}</p>}


  return (
    <section>
      <h2 className="singleReviewTitle">Single Review</h2>

      <h2>Single Review</h2>

      {searchedReview}
      <Comments review_id={review_id}/>
    </section>
  );
}
