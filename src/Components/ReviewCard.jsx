export default function ReviewCard ({reviews}) {
    
    return (
        <ul>
            {reviews.map((review) => { return (
                <li key={review.review_id}>
                    <h3>{review.review_id}. {review.title}</h3>
                    <p>User: {review.owner}</p>
                    <img src={review.review_img_url} height="100px"/>
                    <p>Review: {review.review_body}</p>
                    <p>Designer: {review.designer}</p>
                    <p>Category: {review.category}</p>
                    <p>Comment count: {review.comment_count}</p>
                    <p>Votes: {review.votes}</p>
                    <button>+</button>
                    <button>-</button>
                </li>
            )
            })}

        </ul>
    )
}