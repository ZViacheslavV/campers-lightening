import { CamperReview } from '@/types/camper';
import styles from './CamperDetails.module.scss';

const ReviewsPanel = ({ reviews }: { reviews: CamperReview[] }) => (
  <ul className={styles.reviewsPanel}>
    {reviews.map((r, i) => (
      <li key={i}>
        <p>{r.comment}</p>
      </li>
    ))}
  </ul>
);

export default ReviewsPanel;
