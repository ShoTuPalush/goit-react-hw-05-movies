export const ReviewsCard = ({ review }) => {
  return (
    <>
      <b>Author: {review.author}</b>
      <p>{review.content}</p>
    </>
  );
};
