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

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export function AppCarousel({ items }: AppCarouselProps) {
  const [height, setHeight] = useState<any>(0);
  const mainRef: any = useRef(null);

  const [isSliding, setIsSliding] = useState(false);
  const [slideX, setSlideX] = useState(0);

  const [startTouchX, setStartTouchX] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);
  const screen = useWindowSize();

  useEffect(() => {
    setHeight(mainRef.current?.clientHeight);
  });

  useEffect(() => {
    setIsSliding(false);

    setSlideX(currentItem * -100);
  }, [currentItem])

  function startMove(e: React.TouchEvent<HTMLDivElement>) {
    const currentX = e.nativeEvent.touches[0].clientX;
    const startPercent = (currentX * 100) / screen.width;
    setStartTouchX(startPercent);

    setIsSliding(true);
  }

  function move(e: React.TouchEvent<HTMLDivElement>) {
    const currentX = e.nativeEvent.touches[0].clientX;
    const percent = currentItem * (currentX * 100) / screen.width;

    if (isSliding) setSlideX(percent - startTouchX);
  }

  function endMove(e: React.TouchEvent<HTMLDivElement>) {
    setCurrentItem(slideX <= 0 ? currentItem + 1 : currentItem - 1);
  }

  return (
    <section className="carousel">
      <section
        className="carousel-slide"
        style={{ transform: `translate3d(${slideX}%, 0px, 0px)` }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={`carousel-${index}`}
              className="carousel-item"
              /*onTouchStart={(e) => startMove(e)}
              onTouchMove={(e) => move(e)}
              onTouchEnd={(e) => endMove(e)}*/
            >
              <div className="background" style={{ height: height }}>
                <AppImgContainer
                  height={height}
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
