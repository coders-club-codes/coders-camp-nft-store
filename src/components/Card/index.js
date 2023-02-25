import styles from './styles.module.css';
import Ethereum from '../../assets/icons/Ethereum';
import Heart from '../../assets/icons/Heart';
import Clock from '../../assets/icons/Clock';

export default function Card({ nft }) {
  return (
    <div className={styles.card}>
      <img src={nft.imgUrl} alt={nft.name} className={styles.image} />
      <div className={styles.details}>
        <h5>{nft.name}</h5>

        <div className={styles.authorContainer}>
          <img
            src={nft.author.imgUrl}
            alt={nft.author.name}
            className={styles.authorImage}
          />
          <span>{nft.author.name}</span>
        </div>

        <div className={styles.priceContainer}>
          <h4>
            <Ethereum /> {nft.price} {nft.coin}
          </h4>
          <span>≈ $140.05</span>
        </div>
      </div>

      <div className={styles.timeContainer}>
        <Clock />
        <span>05:20</span>
      </div>

      <div className={styles.likeContainer}>
        <Heart />
        <span>{nft.likes}</span>
      </div>
    </div>
  );
}
