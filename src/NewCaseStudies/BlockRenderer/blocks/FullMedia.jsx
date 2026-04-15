import styles from "./FullMedia.module.scss";

export default function FullMedia({ block, setActiveMedia }) {
  const { media } = block;

  const handleClick = () => {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      setActiveMedia({
        items: [media],
        index: 0,
      });
    } else {
      setActiveMedia(media);
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.full} onClick={handleClick}>
        {media.type === "image" && (
          <img src={media.src} alt="" className={styles.media} />
        )}

        {media.type === "video" && (
          <video
            src={media.src}
            className={styles.media}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
    </section>
  );
}
