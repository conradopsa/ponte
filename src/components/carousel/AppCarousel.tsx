import React, { useEffect, useRef, useState } from "react";
import { AppImgContainer } from "..";
import "./AppCarousel.scss";

interface AppCarouselItem {
  content: JSX.Element;
  background?: string;
}

interface AppCarouselProps {
  items: AppCarouselItem[];
  //margin
}

export function AppCarousel({ items }: AppCarouselProps) {
  const [height, setHeight] = useState<any>(0);
  const mainRef: any = useRef(null);

  useEffect(() => {
    setHeight(mainRef.current?.clientHeight);
  });

  return (
    <section className="carousel">
      <section className="carousel-slide">
        {items.map((item, index) => {
          return (
            <div key={`carousel-${index}`} className="carousel-item">
              <div className="background" style={{ height: height }}>
                <AppImgContainer
                  style={{width: "auto"}}
                  backgroundTitle={item.background}
                />
              </div>
              <main ref={mainRef}>{item.content}</main>
            </div>
          );
        })}
      </section>
    </section>
  );
}
