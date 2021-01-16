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
  const [height, setHeight] = useState(0)
  const elementRef: any = useRef(null)

  useEffect(() => {
    setHeight(elementRef.current?.clientHeight)
  }, [])
  
  return (
    <section className="carousel-item">
      <div ref={elementRef} className="background">
        <AppImgContainer backgroundTitle={items[0].background} />
      </div>
      <main style={{height: height + "px"}}>{items[0].content}</main>
    </section>
  );
}
