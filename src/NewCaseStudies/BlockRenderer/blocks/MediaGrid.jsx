// import styles from "./MediaGrid.module.scss";

// export default function MediaGrid({ block, setActiveMedia }) {
//   const handleClick = (index) => {
//     const isMobile = window.innerWidth <= 500;

//     if (isMobile) {
//       setActiveMedia({
//         items: block.items,
//         index: index,
//       });
//     } else {
//       setActiveMedia(block.items[index]);
//     }
//   };

//   return (
//     <section className={styles.wrapper}>
//       <div
//         className={styles.grid}
//         style={{ gridTemplateColumns: `repeat(${block.columns}, 1fr)` }}
//       >
//         {block.items.map((item, i) => (
//           <div key={i} className={styles.item} onClick={() => handleClick(i)}>
//             {item.type === "image" && (
//               <img src={item.src} alt="" className={styles.media} />
//             )}

//             {item.type === "video" && (
//               <video
//                 src={item.src}
//                 className={styles.media}
//                 muted
//                 loop
//                 playsInline
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState, useRef, useEffect } from "react";
import styles from "./MediaGrid.module.scss";

export default function MediaGrid({ block, setActiveMedia }) {
  const [ratios, setRatios] = useState({});
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMediaLoad = (index, width, height) => {
    if (!width || !height) return;
    setRatios((prev) => ({ ...prev, [index]: width / height }));
  };

  const handleClick = (index) => {
    const isMobile = window.innerWidth <= 500;

    if (isMobile) {
      setActiveMedia({
        items: block.items,
        index: index,
      });
    } else {
      setActiveMedia(block.items[index]);
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.grid}>
        {block.items.map((item, i) => {
          const ratio = ratios[i] || 1;

          return (
            <div
              key={i}
              className={styles.item}
              style={{ flexGrow: ratio, aspectRatio: ratio }}
              onClick={() => handleClick(i)}
            >
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt=""
                  className={styles.media}
                  onLoad={(e) =>
                    handleMediaLoad(
                      i,
                      e.target.naturalWidth,
                      e.target.naturalHeight,
                    )
                  }
                />
              )}

              {item.type === "video" && (
                <video
                  src={item.src}
                  className={styles.media}
                  muted
                  loop
                  playsInline
                  onLoadedMetadata={(e) =>
                    handleMediaLoad(
                      i,
                      e.target.videoWidth,
                      e.target.videoHeight,
                    )
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
