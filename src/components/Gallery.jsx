
import React from 'react';
import styles from './Gallery.module.css';

import gall1 from '../assets/gall1.jpg';
import gall2 from '../assets/gall6.webp';
import gall3 from '../assets/gall3.webp';
import gall4 from '../assets/gall4.jpg';
import gall5 from '../assets/gall5.jpg';

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <p className={styles.subheading}>GALLERY</p>
      <h2 className={styles.heading}>Our Students Gallery</h2>

      <div className={styles.grid}>
        <div className={styles.largeImageBox}>
          <img src={gall1} alt="gall 1" />
        </div>

        <div className={styles.smallImagesGrid}>
          <div className={styles.smallImageBox}><img src={gall2} alt="gall 2" /></div>
          <div className={styles.smallImageBox}><img src={gall3} alt="gall 3" /></div>
          <div className={`${styles.smallImageBox} ${styles.hideOnMobile}`}><img src={gall4} alt="gall 4" /></div>
          <div className={`${styles.smallImageBox} ${styles.hideOnMobile}`}><img src={gall5} alt="gall 5" /></div>
        </div>
      </div>

      <button className={styles.loadMore}>Load More</button>
    </div>
  );
};

export default Gallery;