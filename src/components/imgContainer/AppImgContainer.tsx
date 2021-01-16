import { CSSProperties } from "react";

/**
 * This image container show image and crop without modify your aspect ratio
 */
export function AppImgContainer({
  backgroundTitle,
  height,
  heightContainer,
  alignItems,
  width
}: any) {
  return (
    <section
      style={{
        ...sectionStyle,
        alignItems: alignItems || sectionStyle.alignItems,
        height: heightContainer || sectionStyle.height,
      }}
    >
      <img
        style={{
          ...imgStyle,
          height: height || imgStyle.height,
          width: width || sectionStyle.width,
        }}
        src={backgroundTitle}
      />
    </section>
  );
}

const sectionStyle: CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgStyle: CSSProperties = {
  width: "100vw",
  objectFit: "cover"
};
