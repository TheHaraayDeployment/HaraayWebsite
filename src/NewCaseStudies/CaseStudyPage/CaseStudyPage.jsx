import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CaseStudyPage.module.scss";
import { caseStudies } from "../data/caseStudies";
import BlockRenderer from "../BlockRenderer/BlockRenderer.jsx";
import MediaModal from "../MediaModal/MediaModal.jsx";
import HeroSection from "./HeroSection";
import SimilarProjects from "./SimilarProjects";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const data = caseStudies[slug];

  const [activeMedia, setActiveMedia] = useState(null);

  if (!data) {
    return (
      <div className={styles.notFound}>
        <h1>Case Study Not Found</h1>
      </div>
    );
  }

  const pageStyle = data.theme?.background
    ? { "--background-light": data.theme.background }
    : undefined;

  return (
    <div className={styles.caseStudyMainPage} style={pageStyle}>
      <HeroSection hero={data.hero} />

      <div className={styles.blocks}>
        {data.blocks.map((block) => (
          <BlockRenderer
            key={block.id}
            block={block}
            setActiveMedia={setActiveMedia}
          />
        ))}
      </div>
      {data.similarProjects && data.similarProjects.length > 0 && (
        <SimilarProjects slugs={data.similarProjects} />
      )}
      {activeMedia && (
        <MediaModal media={activeMedia} onClose={() => setActiveMedia(null)} />
      )}
    </div>
  );
}
