import { CSSProperties } from "react";

/**
 * This image container show image and crop without modify your aspect ratio
 */
export function AppImgContainer({ backgroundTitle }: any) {
  return (
    <section style={sectionStyle}>
      <img style={imgStyle} src={backgroundTitle} />
    </section>
  );
}

const sectionStyle: CSSProperties = {
  height: "300px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imgStyle: CSSProperties = {
  height: "300px",
  width: "auto",
};
