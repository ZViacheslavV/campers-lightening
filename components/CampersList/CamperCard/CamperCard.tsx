'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useCampersStore } from '@/lib/store/camperStore';
import { Camper } from '@/types/camper';
import styles from './CamperCard.module.scss';
import RedButton from '@/components/ui/RedButton/RedButton';
import { MapIcon } from '@/components/ui/MapIcon/MapIcon';

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  const { favorites, toggleFavorite } = useCampersStore();

  const isFavorite = favorites.includes(camper.id);

  return (
    <div className={styles.camperCard}>
      <Image
        src={camper.gallery[0]?.thumb || '/placeholder.jpg'}
        alt={camper.name}
        width={292}
        height={320}
        className={styles.camperThumb}
      />

      <div className={styles.camperInfo}>
        <div className={styles.header}>
          <h2>{camper.name}</h2>
          <div className={styles.priceFav}>
            <p>€{camper.price.toFixed(2)}</p>
            <button onClick={() => toggleFavorite(camper.id)}>
              <svg width="26" height="24" className={isFavorite ? 'favorite' : ''}>
                <use href="/icons.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.locationRating}>
          <div className={styles.rating}>
            <MapIcon className={styles.mapIcon} />
            {camper.rating}
          </div>
          <Link href={`/catalog/${camper.id}/#reviews`}>
            ({camper.reviews.length} {camper.reviews.length === 1 ? 'review' : 'reviews'})
          </Link>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <RedButton as="link" href={`/catalog/${camper.id}`}>
          Show More
        </RedButton>
      </div>
    </div>
  );
}
