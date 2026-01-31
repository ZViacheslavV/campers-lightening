import { CamperReview } from '@/types/camper';

const ReviewsPanel = ({ reviews }: { reviews: CamperReview[] }) => (
  <ul>
    {reviews.map((r, i) => (
      <li key={i}>
        <p>{r.comment}</p>
      </li>
    ))}
  </ul>
);

export default ReviewsPanel;
