'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Map } from 'lucide-react';
import { useCampersStore } from '@/lib/store/camperStore';
import { Camper } from '@/types/camper';

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  const { favorites, toggleFavorite } = useCampersStore();

  const isFavorite = favorites.includes(camper.id);

  return (
    <div className="camper-card">
      <Image
        src={camper.gallery[0]?.thumb || '/placeholder.jpg'}
        alt={camper.name}
        width={292}
        height={320}
        className="camper-thumb"
      />

      <div className="camper-info">
        <div className="header">
          <h2>{camper.name}</h2>
          <div className="price-fav">
            <p>€{camper.price.toFixed(2)}</p>
            <button onClick={() => toggleFavorite(camper.id)}>
              <svg width="26" height="24" className={isFavorite ? 'favorite' : ''}>
                <use href="/icons.svg#icon-heart" />
              </svg>
            </button>
          </div>
        </div>

        <div className="location-rating">
          <div className="rating">
            <Map size="16" />
            {camper.rating}
          </div>
          <Link href={`/catalog/${camper.id}/#reviews`}>
            ({camper.reviews.length} {camper.reviews.length === 1 ? 'review' : 'reviews'})
          </Link>
        </div>

        <p className="description">{camper.description}</p>

        <Link href={`/catalog/${camper.id}`} className="show-more-btn">
          Show More
        </Link>
      </div>
    </div>
  );
}
