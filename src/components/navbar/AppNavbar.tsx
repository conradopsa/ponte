import { CSSProperties } from "react";

interface AppNavbarProperties {
  position?: "absolute" | "fixed" | "relative" | "static" | any;
  [properties: string]: any;
}

export function AppNavbar({ position, children }: AppNavbarProperties) {
  return (
    <section
      style={{
        ...sectionStyle,
        position: position || sectionStyle.position,
      }}
    >
      <div style={divStyle}>{children}</div>
    </section>
  );
}

const sectionStyle: CSSProperties = {
  backgroundColor: "rgb(0, 0, 0, 0.15)",
  position: "fixed",
  top: 0,
  right: 0,
  width: "100%",
  zIndex: 100
};

const divStyle: CSSProperties = {
  display: "flex",
  padding: "8px 20px",
  //paddingRight: "15px",
  alignItems: "center",
};
