import { CSSProperties } from "react";



/**
 * This image container show image and crop without modify your aspect ratio
 */
export function AppImgContainer({ backgroundTitle, height }: any) {
  return (
    <section style={sectionStyle}>
      <img style={{...imgStyle, height: height || imgStyle.height}} src={backgroundTitle} />
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
  width: "auto",
};
