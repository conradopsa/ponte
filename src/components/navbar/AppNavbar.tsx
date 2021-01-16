import { CSSProperties, useEffect, useRef, useState } from "react";

interface AppNavbarProperties {
  position?: "absolute" | "fixed" | "relative" | "static" | any;
  [properties: string]: any;
}

export function AppNavbar({ style, children }: AppNavbarProperties) {
  const sectionRef = useRef<HTMLElement | null>(null)
  
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(sectionRef.current?.clientHeight || 0)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        ...sectionStyle,
        ...style,
        marginBottom: `-${height}px`
      }}
    >
      <div style={divStyle}>{children}</div>
    </section>
  );
}

const sectionStyle: CSSProperties = {
  backgroundColor: "rgb(0, 0, 0, 0.15)",
  position: "relative",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 100
};

const divStyle: CSSProperties = {
  display: "flex",
  padding: "8px 20px",
  //paddingRight: "15px",
  alignItems: "center",
};
