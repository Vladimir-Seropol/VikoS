
interface StarRatingProps {
  stars: number; // Количество звезд для оценки
  maxStars?: number; // Максимальное количество звезд (по умолчанию 5)
}

const StarRating: React.FC<StarRatingProps> = ({ stars, maxStars = 5 }) => {
  return (
    <div style={{ display: "flex" }}>
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} style={{ color: index < stars ? "#FFD700" : "#ccc" }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
