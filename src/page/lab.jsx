import React, { useRef, useState } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import usePreventBodyScroll from "../usePreventBodyScroll";
import { Link } from "react-router-dom";

export const Lab = () => {
  const refText = useRef();
  const [detailImage, setDetailImage] = useState({ visible: false, idx: null });
  const isInViewText = useInView(refText, { once: true });
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollPrev("smooth");
    } else if (ev.deltaY > 0) {
      apiObj.scrollNext("smooth");
    }
  }

  const text = "The Lab";

  const whiteBgVariant = {
    visible: {
      opacity: 1,
      visibility: "visible",
    },
    hidden: {
      opacity: 0,
      visibility: "hidden",
    },
  };

  const containerVariant = {
    visible: {
      opacity: 1,
      visibility: "visible",
      transition: { staggerChildren: 0.05 },
    },
    hidden: {
      opacity: 0,
      visibility: "hidden",
    },
  };

  const imageVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "ease-in-out",
        damping: 1,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 120,
      transition: {
        type: "ease-in-out",
        damping: 1,
        stiffnes: 100,
      },
    },
  };

  const letterVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "linear",
        damping: 40,
        stiffness: 10,
      },
    },
    hidden: {
      opacity: 0,
      y: 250,
      transition: {
        type: "linear",
        damping: 40,
        stiffnes: 10,
      },
    },
  };

  const imgData = [
    {
      src: "https://www.datocms-assets.com/92457/1680017080-ofs_homecollection.png?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680017396-the_retreat_lo.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680431509-remoteworking_daytime_v001-min.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680431515-remoteworking_nighttime_v001-min.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694505-220618_perfume-bottle_001.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694464-r_mason_004b.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680694524-21-15_aesop_002_b-w.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680696278-rossm_final.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1680696547-interior_07.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073885-x_ray_tutorial_v001_front_x-ray_03_edit.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073869-x_ray_layout_edit.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073885-x_ray_tutorial_v001_front_x-ray_03_edit.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695073917-x_ray_tutorial_v001_wing_mirror_edit.jpg?fit=max&",
    },
    {
      src: "https://www.datocms-assets.com/92457/1695157865-x_ray_tutorial_v2.jpg?fit=max&",
    },
  ];

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-white z-[999] js-t-mask"
        animate={{ visibility: "hidden" }}
        variants={whiteBgVariant}
        whileinView="hidden"
        initial="visible"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div className="fixed inset-0 flex flex-col justify-between bg-black text-white pt-100 overflow-hidden">
        <div className="site-max flex justify-center">
          <h1
            ref={refText}
            className="origin-bottom text-[16.75vw] s:text-[17.25vw] leading-none font-3 italic font-normal uppercase whitespace-nowrap"
            style={{
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
              transform: isInViewText ? "none" : "translateY(50%)",
            }}
          >
            The Lab
          </h1>
        </div>
        <div
          onMouseEnter={disableScroll}
          onMouseLeave={enableScroll}
          className="site-max select-none s:mt-auto order-2 s:order-last overflow-x-auto snap-mandatory"
          style={{
            opacity: isInViewText ? 1 : 0,
            scrollbarWidth: "none",
            transform: isInViewText ? "none" : "translateY(100%)",
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <ScrollMenu
            onWheel={onWheel}
            scrollContainerClassName="flex items-end h-[250px] pb-[5.2rem] snap-always snap-center"
            whileInView="visible"
            initial="hidden"
            variants={containerVariant}
          >
            {imgData.map((val, idx) => {
              return (
                <motion.div
                  onClick={() => setDetailImage({ visible: true, idx })}
                  data-columns={idx}
                  className="cursor-pointer slide min-w-[80px] mr-[2.4rem]"
                  whileHover={{
                    transform: "translateY(-20%)",
                  }}
                  whileInView={{
                    opacity: isInViewText ? 1 : 0,
                    transform: isInViewText
                      ? "translateY(0%)"
                      : "translateY(120%)",
                  }}
                >
                  <img
                    src={`${val.src}h=300&w=200`}
                    decoding="async"
                    loading="lazy"
                    draggable="false"
                    className={`is-loaded ${
                      detailImage.idx === idx ? "hidden" : ""
                    }`}
                    alt=""
                  />
                </motion.div>
              );
            })}
          </ScrollMenu>

          <AnimatePresence>
            {detailImage.visible && (
              <Link to={`/lab/${detailImage.idx}`}>
                <motion.div
                  initial={{ opacity: 0, translateY: "100%" }}
                  animate={{ opacity: 1, translateY: "0%" }}
                  exit={{ opacity: 0, translateY: "100%" }}
                  transition={{ duraition: 2 }}
                  onClick={() => setDetailImage({ visible: false, idx: null })}
                  data-v-4f271d4e=""
                  className="cursor-pointer fixed inset-0 pointer-events-none flex items-center justify-center z-10"
                >
                  <div
                    data-v-4f271d4e=""
                    className="relative max-s:w-full max-s:max-w-[100%] max-s:max-h-[100%] s:absolute s:inset-y-100 s:left-1/2 -translate-x-1/2 z-2 pointer-events-auto"
                    style={{ "aspect-ratio": "0.8 / 1" }}
                  >
                    <div
                      data-v-4f271d4e=""
                      className="absolute media-fill inset-0 js-flip-el"
                      data-flip-id="auto-4"
                    >
                      <figure
                        data-v-68042254=""
                        data-v-4f271d4e=""
                        className="relative media-fill !absolute inset-0 z-1"
                      >
                        <img
                          data-v-68042254=""
                          src={`${imgData[detailImage.idx].src}h=300&w=200`}
                          decoding="async"
                          loading="lazy"
                          draggable="false"
                          className="is-loaded"
                          alt=""
                        />
                      </figure>
                      <img
                        src={`${imgData[detailImage.idx].src}h=3000&w=2000`}
                        style={{ zIndex: 5 }}
                        alt=""
                      />
                    </div>
                  </div>
                </motion.div>
              </Link>
            )}
          </AnimatePresence>

          <div className="hidden col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6 col-span-7 col-span-8 col-span-9 col-span-10 col-span-11 col-span-12 col-start-1 col-start-2 col-start-3 col-start-4 col-start-5 col-start-6 col-start-7 col-start-8 col-start-9 col-start-10 col-start-11 col-start-12 s:col-span-1 s:col-span-2 s:col-span-3 s:col-span-4 s:col-span-5 s:col-span-6 s:col-span-7 s:col-span-8 s:col-span-9 s:col-span-10 s:col-span-11 s:col-span-12 s:col-start-1 s:col-start-2 s:col-start-3 s:col-start-4 s:col-start-5 s:col-start-6 s:col-start-7 s:col-start-8 s:col-start-9 s:col-start-10 s:col-start-11 s:col-start-12"></div>
          <form className="hidden invisible" method="POST" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <input type="email" name="name" required="" />
            <input name="subject" required="" />
            <textarea name="message" required=""></textarea>
          </form>
          <div className="fixed inset-0 s:inset-x-50 s:top-[12rem] pointer-events-none media-fill z-[998] js-t-target">
            <div className="max-s:absolute max-s:inset-0 relative s:pt-[56.25%]"></div>
          </div>
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[35rem] pointer-events-none media-fill z-[998] js-t-stack-start">
            <div className="pt-[125%]"></div>
          </div>
        </div>

        <div
          style={{
            opacity: isInViewText ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            transform: isInViewText ? "none" : "translateY(100%)",
          }}
          data-v-173a1c5e=""
          className="site-max s:mb-auto order-last s:order-2 pb-20 s:pb-0"
        >
          <div
            data-v-173a1c5e=""
            aria-label="Experiments and personal work collected over the years"
            className="animate w-full flex flex-col items-start s:mt-52 is-active"
          >
            <div
              data-v-173a1c5e=""
              aria-hidden="true"
              className="overflow-hidden"
            >
              <div data-v-173a1c5e="" className="l-1">
                Experiments and personal
              </div>
            </div>
            <div
              data-v-173a1c5e=""
              aria-hidden="true"
              className="overflow-hidden"
            >
              <div data-v-173a1c5e="" className="l-2">
                work collected over the years
              </div>
            </div>
            <div data-v-173a1c5e="" className="overflow-hidden mt-15">
              <div data-v-173a1c5e="" className="l-3">
                [2018 — 2024]
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        animate={{
          opacity: [1, 1, 1],
          visibility: ["visible", "visible", "visible"],
          translateY: ["100%", "0%", "0%"],
          transitionEnd: {
            visibility: "hidden",
            opacity: 0,
            display: "none",
          },
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 0.2, 1],
        }}
        className="w-full fixed inset-0 flex items-center justify-center bg-black text-white z-[999] js-t-dark-mask"
      >
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={containerVariant}
          className="w-full animate text-[17.25vw] leading-none font-3 uppercase whitespace-nowrap overflow-hidden js-t-lab-text"
        >
          <motion.div className="inline-flex w-full justify-center">
            {Array.from(text).map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  className="js-lab-l"
                  variants={letterVariant}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};
