"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
// import ClassNames from "embla-carousel-class-names";
import { Image } from "@nextui-org/image";
// import NextImage from "next/image";
import "./index.css";

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselApi = UseEmblaCarouselType[1];
type EmblaEventType = Parameters<Exclude<CarouselApi, undefined>["on"]>[0];
type PropType = {
  slides: any[];
  options?: CarouselOptions;
};
// const TWEEN_FACTOR_BASE = 0.2;
const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(),
    // ClassNames(),
  ]);
  // const tweenFactor = useRef(0);
  // const tweenNodes = useRef<HTMLElement[]>([]);
  const onNavButtonClick = useCallback((emblaApi: CarouselApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  // const setTweenNodes = useCallback((emblaApi: CarouselApi): void => {
  //   if (!emblaApi) return;
  //   tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
  //     return slideNode.querySelector(".embla__parallax__layer") as HTMLElement;
  //   });
  // }, []);

  // const setTweenFactor = useCallback((emblaApi: CarouselApi) => {
  //   if (!emblaApi) return;
  //   tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  // }, []);

  // const tweenParallax = useCallback(
  //   (emblaApi: CarouselApi, eventName?: EmblaEventType) => {
  //     if (!emblaApi) return;
  //     const engine = emblaApi.internalEngine();
  //     const scrollProgress = emblaApi.scrollProgress();
  //     const slidesInView = emblaApi.slidesInView();
  //     const isScrollEvent = eventName === "scroll";

  //     emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
  //       let diffToTarget = scrollSnap - scrollProgress;
  //       const slidesInSnap = engine.slideRegistry[snapIndex];

  //       slidesInSnap.forEach((slideIndex) => {
  //         if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

  //         if (engine.options.loop) {
  //           engine.slideLooper.loopPoints.forEach((loopItem) => {
  //             const target = loopItem.target();

  //             if (slideIndex === loopItem.index && target !== 0) {
  //               const sign = Math.sign(target);

  //               if (sign === -1) {
  //                 diffToTarget = scrollSnap - (1 + scrollProgress);
  //               }
  //               if (sign === 1) {
  //                 diffToTarget = scrollSnap + (1 - scrollProgress);
  //               }
  //             }
  //           });
  //         }

  //         const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
  //         const tweenNode = tweenNodes.current[slideIndex];
  //         tweenNode.style.transform = `translateX(${translate}%)`;
  //       });
  //     });
  //   },
  //   [],
  // );
  // useEffect(() => {
  //   if (!emblaApi) return;

  //   setTweenNodes(emblaApi);
  //   setTweenFactor(emblaApi);
  //   tweenParallax(emblaApi);

  //   emblaApi
  //     .on("reInit", setTweenNodes)
  //     .on("reInit", setTweenFactor)
  //     .on("reInit", tweenParallax)
  //     .on("scroll", tweenParallax);
  // }, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes]);

  return (
    <section className="embla overflow-hidden rounded sm:rounded-lg">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container h-fit">
          {slides.map((value, index) => (
            <div className="embla__slide h-40 sm:h-96 " key={value}>
              {/* <div className="embla__parallax">
                <div className="embla__parallax__layer"> */}
                  <Image
                    // as={NextImage}
                    // className="embla__slide__img embla__parallax__img h-full"
                    className="embla__slide__img"
                    classNames={{ zoomedWrapper: "h-full",wrapper:"h-full" }}
                    src={value}
                    alt="carousel_img"
                    isZoomed
                    // priority={index === 0 ? true : false}
                    width={1600}
                    height={384}
                    // quality={100}
                  />
                {/* </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="embla__dots !hidden sm:!flex">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : "",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default EmblaCarousel;
