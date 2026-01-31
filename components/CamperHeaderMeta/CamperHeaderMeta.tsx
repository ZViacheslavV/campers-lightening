import Link from 'next/link';
import { Camper } from '@/types/camper';
import { ICONS } from '@/lib/constants';
import styles from './CamperHeaderMeta.module.scss';
import { MapIcon } from '../ui/MapIcon/MapIcon';

interface Props {
  camper: Camper;
  isFavorite?: boolean;
  toggleFavorite?: (id: string) => void;
  showFavorite?: boolean;
  priceBelow?: boolean;
}

const CamperHeaderMeta = ({
  camper,
  isFavorite = false,
  toggleFavorite,
  showFavorite = true,
  priceBelow = false,
}: Props) => {
  const reviewsCount = camper.reviews.length;
  const reviewsLabel = reviewsCount === 1 ? 'review' : 'reviews';
  const formattedLocation = camper.location.split(', ').reverse().join(', ');

  const priceElement = <p className={styles.price}>€{camper.price.toFixed(2)}</p>;

  return (
    <div className={styles.headerLocRatingComp}>
      <div className={styles.header}>
        <h2>{camper.name}</h2>

        {!priceBelow && showFavorite && toggleFavorite && (
          <div className={styles.priceFav}>
            {priceElement}
            <button onClick={() => toggleFavorite(camper.id)}>
              <svg width="25" height="24" className={isFavorite ? styles.favorite : ''}>
                <use href={ICONS.heart} />
              </svg>
            </button>
          </div>
        )}

        {!priceBelow && !showFavorite && <div className={styles.priceFav}>{priceElement}</div>}
      </div>

      <div className={styles.locationRating}>
        <div className={styles.rating}>
          <svg width="16" height="16" className={isFavorite ? styles.favorite : ''}>
            <use href={ICONS.star} />
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

      {priceBelow && <div style={{ marginTop: '16px' }}>{priceElement}</div>}
    </div>
  );
};

export default CamperHeaderMeta;
