import TextSplit from "./blocks/TextSplit.jsx";
import MediaGrid from "./blocks/MediaGrid.jsx";
import FullMedia from "./blocks/FullMedia.jsx";
import RichText from "./blocks/RichText.jsx";

export default function BlockRenderer({ block, setActiveMedia }) {
  if (!block || !block.type) return null;

  switch (block.type) {
    case "textSplit":
      return <TextSplit block={block} />;

    case "mediaGrid":
      return <MediaGrid block={block} setActiveMedia={setActiveMedia} />;

    case "fullMedia":
      return <FullMedia block={block} setActiveMedia={setActiveMedia} />;

    case "richText":
      return <RichText block={block} />;

    default:
      return null;
  }
}
