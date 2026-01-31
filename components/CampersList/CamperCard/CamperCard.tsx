'use client';

import Image from 'next/image';

import { useCampersStore } from '@/lib/store/camperStore';
import { Camper } from '@/types/camper';
import styles from './CamperCard.module.scss';
import RedButton from '@/components/ui/RedButton/RedButton';
import CamperEquipmentsList from '@/components/CamperEquipmentList/CamperEquipmentsList';
import CamperHeaderMeta from '@/components/CamperHeaderMeta/CamperHeaderMeta';

interface Props {
  camper: Camper;
}

export default function CamperCard({ camper }: Props) {
  const { favorites, toggleFavorite } = useCampersStore();

  const isFavorite = favorites.includes(camper.id);

  return (
    <li className={styles.camperCard}>
      <Image
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
        width={292}
        height={320}
        className={styles.camperThumb}
      />

      <div className={styles.camperInfo}>
        <CamperHeaderMeta
          camper={camper}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
          showFavorite
        />

        <p className={styles.description}>{camper.description}</p>

        <CamperEquipmentsList camper={camper} />

        <RedButton as="link" href={`/catalog/${camper.id}`}>
          Show More
        </RedButton>
      </div>
    </li>
  );
}
