import CamperHeaderMeta from '@/components/CamperHeaderMeta/CamperHeaderMeta';
import { Camper } from '@/types/camper';
import styles from './CamperGalleryInfo.module.scss';
import Image from 'next/image';

const CamperGalleryInfo = ({ camper }: { camper: Camper }) => (
  <div className={styles.galleryInfoWrapper}>
    <CamperHeaderMeta camper={camper} showFavorite={false} priceBelow />

    <ul className={styles.galleryWrapper}>
      {camper.gallery.map((pic, index) => (
        <li key={index} className={styles.thumb}>
          <Image
            className={styles.picture}
            src={pic.thumb}
            width={292}
            height={312}
            alt={camper.name}
          />
        </li>
      ))}
    </ul>

    <p className={styles.description}>{camper.description}</p>
  </div>
);

export default CamperGalleryInfo;
