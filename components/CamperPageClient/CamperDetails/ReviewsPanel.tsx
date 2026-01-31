import { CamperReview } from '@/types/camper';
import styles from './CamperDetails.module.scss';

interface Props {
  reviews: CamperReview[];
}

const ReviewsPanel = ({ reviews }: Props) => (
  <>
    <h3 className="visually-hidden">Reviews</h3>

    <ul className={styles.reviewsPanel}>
      {reviews.map((r, i) => (
        <li key={i}>
          <p>{r.comment}</p>
        </li>
      ))}
    </ul>
  </>
);

export default ReviewsPanel;
