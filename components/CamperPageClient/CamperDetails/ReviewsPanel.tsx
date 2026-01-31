import { CamperReview } from '@/types/camper';
import styles from './CamperDetails.module.scss';
import { ICONS } from '@/lib/constants';

interface Props {
  reviews: CamperReview[];
}

const ReviewsPanel = ({ reviews }: Props) => (
  <>
    <h3 className="visually-hidden">Reviews</h3>

    <ul className={styles.reviewsPanel}>
      {reviews.map((r, i) => (
        <li key={i} className={styles.rewLitem}>
          <div className={styles.reviewerMeta}>
            <span className={styles.nameCircle}>{r.reviewer_name.slice(0, 1)}</span>
            <div>
              <p>{r.reviewer_name}</p>
              <div className={styles.galaxy}>
                <svg width="16" height="16" className={false ? styles.favorite : ''}>
                  <use href={`/icons.svg#${ICONS.star}`} />
                </svg>
              </div>
            </div>
          </div>

          <p className={styles.comment}>{r.comment}</p>
        </li>
      ))}
    </ul>
  </>
);

export default ReviewsPanel;
