import Link from 'next/link';
import { Camper } from '@/types/camper';
import { ICONS } from '@/lib/constants';
import styles from './CamperMeta.module.scss';
import { MapIcon } from '../../ui/MapIcon/MapIcon';

interface Props {
  camper: Camper;
  isFavorite?: boolean;
}

const CamperMeta = ({ camper, isFavorite = false }: Props) => {
  const reviewsCount = camper.reviews.length;
  const reviewsLabel = reviewsCount === 1 ? 'review' : 'reviews';
  const formattedLocation = camper.location.split(', ').reverse().join(', ');

  return (
    <div className={styles.locationRating}>
      <div className={styles.rating}>
        <svg width="16" height="16" className={isFavorite ? styles.favorite : ''}>
          <use href={`/icons.svg#${ICONS.star}`} />
        </svg>

        <Link href={`/catalog/${camper.id}#reviews`}>
          {camper.rating} ({reviewsCount} {reviewsLabel})
        </Link>
      </div>

      <div className={styles.location}>
        <MapIcon className={styles.mapIcon} />
        <p className={styles.description}>{formattedLocation}</p>
      </div>
    </div>
  );
};

export default CamperMeta;
