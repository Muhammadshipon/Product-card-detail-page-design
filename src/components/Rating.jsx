import ReactStars from "react-rating-stars-component";

 
 const Rating = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
       <ReactStars
    count={5}
    onChange={ratingChanged}
    value={5}
    size={24}
    activeColor="#ffd700"
  />
    </div>
  );
 };
 
 export default Rating;

 
