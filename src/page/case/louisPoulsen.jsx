import React, { useEffect, useState } from "react";

export const LouisPoulsen = () => {
  const [isActive, setIsActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setIsActive(true);

    return () => { };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-white invisible z-[999] js-t-mask"></div>

      <div className="overflow-hidden">
        <div className="site-max pt-110 pb-150 s:py-150 flex flex-col items-center">
          <h1
            className={`text-60 s:text-140 text-center uppercase leading-none split-title words chars splitting ${isActive ? "is-active" : ""
              }`}
            style={{ "--word-total": 2, "--char-total": 12 }}
          >
            <span
              className="word"
              data-word="Louis"
              style={{ "--word-index": 0 }}
            >
              <span
                className="char"
                data-char="L"
                style={{ "--char-index": 0 }}
              >
                L
              </span>
              <span
                className="char"
                data-char="o"
                style={{ "--char-index": 1 }}
              >
                o
              </span>
              <span
                className="char"
                data-char="u"
                style={{ "--char-index": 2 }}
              >
                u
              </span>
              <span
                className="char"
                data-char="i"
                style={{ "--char-index": 3 }}
              >
                i
              </span>
              <span
                className="char"
                data-char="s"
                style={{ "--char-index": 4 }}
              >
                s
              </span>
            </span>
            <span className="whitespace"></span>
            <span
              className="word"
              data-word="Poulsen"
              style={{ "--word-index": 1 }}
            >
              <span
                className="char"
                data-char="P"
                style={{ "--char-index": 5 }}
              >
                P
              </span>
              <span
                className="char"
                data-char="o"
                style={{ "--char-index": 6 }}
              >
                o
              </span>
              <span
                className="char"
                data-char="u"
                style={{ "--char-index": 7 }}
              >
                u
              </span>
              <span
                className="char"
                data-char="l"
                style={{ "--char-index": 8 }}
              >
                l
              </span>
              <span
                className="char"
                data-char="s"
                style={{ "--char-index": 9 }}
              >
                s
              </span>
              <span
                className="char"
                data-char="e"
                style={{ "--char-index": 10 }}
              >
                e
              </span>
              <span
                className="char"
                data-char="n"
                style={{ "--char-index": 11 }}
              >
                n
              </span>
            </span>
          </h1>
          <div
            className={`text-45 s:text-100 font-2 text-center leading-none mt-10 s:mt-20 split-title words chars splitting ${isActive ? "is-active" : ""
              }`}
            style={{
              "--word-total": 1,
              "--char-total": 6,
            }}
          >
            <span
              className="word"
              data-word="(2022)"
              style={{ "--word-index": 0 }}
            >
              <span
                className="char"
                data-char="("
                style={{ "--char-index": 0 }}
              >
                (
              </span>
              <span
                className="char"
                data-char="2"
                style={{ "--char-index": 1 }}
              >
                2
              </span>
              <span
                className="char"
                data-char="0"
                style={{ "--char-index": 2 }}
              >
                0
              </span>
              <span
                className="char"
                data-char="2"
                style={{ "--char-index": 3 }}
              >
                2
              </span>
              <span
                className="char"
                data-char="2"
                style={{ "--char-index": 4 }}
              >
                2
              </span>
              <span
                className="char"
                data-char=")"
                style={{ "--char-index": 5 }}
              >
                )
              </span>
            </span>
          </div>
        </div>
        <div
          className="px-20 s:px-195 pb-30 s:pb-85 flex flex-col gap-y-30 s:gap-y-0 s:flex-row s:justify-between leading-[1.1]"
          style={{ opacity: 1 }}
        >
          <div className="flex flex-col items-start">
            <span>Services</span>
            <span className="uppercase">[Art Direction]</span>
          </div>
          <div className="flex">
            <div className="flex flex-col items-start">
              <span>Client</span>
              <span className="uppercase">[Louis Poulsen]</span>
            </div>
            <div className="flex flex-col items-start ml-100">
              <span>Agency</span>
              <span className="uppercase">[Frame]</span>
            </div>
          </div>
        </div>
        <div className="relative site-max max-s:!px-0 mb-80 s:mb-150">
          <div className="relative pt-[56.25%] media-fill js-t-end-target">
            <figure
              className="overflow-hidden !absolute inset-0 js-t-end-target-remove media-fill lazy absolute top-0 left-0 h-full w-full"
              data-v-653e778a=""
            >
              <picture className="absolute inset-0" data-v-653e778a="">
                <source
                  type="image/webp"
                  srcSet="https://www.datocms-assets.com/92457/1680684622-lp_ss23_dark_rnd_v018_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                  data-v-653e778a=""
                />
                <source
                  type="image/jpg"
                  srcSet="https://www.datocms-assets.com/92457/1680684622-lp_ss23_dark_rnd_v018_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                  data-v-653e778a=""
                />
                <img
                  src="https://www.datocms-assets.com/92457/1680684622-lp_ss23_dark_rnd_v018_rm.jpg"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  width="1920"
                  height="1080"
                  alt=""
                  data-v-653e778a=""
                  className="is-loaded"
                />
              </picture>
            </figure>
            <div
              className="absolute inset-0 invisible z-[20] js-hero-vid"
              style={{
                opacity: 1,
                visibility: "inherit",
              }}
            >
              <video
                autoPlay={true}
                preload="meta"
                loop={true}
                playsInline={true}
                muted={true}
              >
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/907403121/rendition/1440p/file.mp4?loc=external&log_user=0&signature=cc2ceed75ed2d6e63389591fb11f7b6c2bfa60a69c481dc755974460341c72a7"
                  type="video/mp4"
                />
              </video>
              <button
                type="button"
                className="absolute bottom-20 s:bottom-30 left-20 s:left-30 flex items-center h-25 s:h-40 pb-[.1em] z-2 rounded-full bg-white px-12 s:px-25 max-s:text-12 text-black"
              >
                Unmute
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="site-grid items-start mb-100 s:mb-200">
            <div className="col-span-6 s:col-span-3">01.</div>
            <div className="col-span-6 s:col-span-8 mt-50 s:mt-0">
              <h2 className="h3 s:mt-[-.25em]">
                <em>Classic design</em>
                stands the test of time.
              </h2>
              <div className="grid grid-cols-8 gap-x-24 mt-50 s:mt-100">
                <h3 className="col-span-8 s:col-span-3 uppercase">
                  [Project info]
                </h3>
                <div className="col-span-8 s:col-span-4 txt mt-50 s:mt-0">
                  <p>
                    <strong>(Re)Discover Iconic Designs</strong>
                  </p>

                  <p>
                    I was brought onto this project by{" "}
                    <a href="https://frame.dk/projects/louis-poulsen-icons/">
                      Frame
                    </a>
                    to help create the art direction for Louis Poulsens 2023
                    campaign, 'Icons'. The creative challenge for this campaign
                    was to portray nine very distinct products (both iconic and
                    new designs) in a coherent, sophisticsted yet contemporary
                    setting.&nbsp;
                  </p>

                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-1 s:col-span-12"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680684440-lp_ss23_bright_rnd_v013_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680684440-lp_ss23_bright_rnd_v013_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680684440-lp_ss23_bright_rnd_v013_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1920"
                height="1080"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-2 s:col-span-10"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680684387-lp_ss23_dark_rnd_v017_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680684387-lp_ss23_dark_rnd_v017_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680684387-lp_ss23_dark_rnd_v017_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1920"
                height="1080"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-1 s:col-span-12"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680684380-lp_ss23_bright_rnd_v012_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680684380-lp_ss23_bright_rnd_v012_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680684380-lp_ss23_bright_rnd_v012_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1920"
                height="1080"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden col-span-6 mb-40 s:mb-0 media-fill lazy relative w-full"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "125%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680685881-lp_ss23_bright_rnd_v007_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680685881-lp_ss23_bright_rnd_v007_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680685881-lp_ss23_bright_rnd_v007_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1080"
                height="1350"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
          <figure
            className="overflow-hidden col-span-6 media-fill lazy relative w-full"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "125%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680685893-lp_ss23_dark_rnd_v014_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680685893-lp_ss23_dark_rnd_v014_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680685893-lp_ss23_dark_rnd_v014_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1080"
                height="1350"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-1 s:col-span-12"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680685937-lp_ss23_bright_rnd_v009_rm_offwhite.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680685937-lp_ss23_bright_rnd_v009_rm_offwhite.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680685937-lp_ss23_bright_rnd_v009_rm_offwhite.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1280"
                height="720"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-2 s:col-span-10"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680684526-lp_ss23_nordic_rnd_v001_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680684526-lp_ss23_nordic_rnd_v001_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680684526-lp_ss23_nordic_rnd_v001_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1920"
                height="1080"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div className="site-grid mb-40 s:mb-200">
          <figure
            className="overflow-hidden media-fill lazy relative w-full s:col-start-1 s:col-span-12"
            data-v-653e778a=""
          >
            <div style={{ paddingTop: "56.25%" }} data-v-653e778a=""></div>
            <picture className="absolute inset-0" data-v-653e778a="">
              <source
                type="image/webp"
                srcSet="https://www.datocms-assets.com/92457/1680684580-lp_ss23_room_rnd_v008_rm.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                data-v-653e778a=""
              />
              <source
                type="image/jpg"
                srcSet="https://www.datocms-assets.com/92457/1680684580-lp_ss23_room_rnd_v008_rm.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                data-v-653e778a=""
              />
              <img
                src="https://www.datocms-assets.com/92457/1680684580-lp_ss23_room_rnd_v008_rm.jpg"
                loading="lazy"
                decoding="async"
                draggable="false"
                width="1920"
                height="1080"
                alt=""
                data-v-653e778a=""
                className="is-loaded"
              />
            </picture>
          </figure>
        </div>
        <div
          className="el site-grid mb-40 s:mb-200 select-none"
          data-v-dc6b7758=""
        >
          <div
            className="el relative bg-black cursor-pointer col-span-6 overflow-hidden s:col-span-12"
            data-v-dc6b7758=""
          >
            <div
              className="el__aspect"
              style={{ "--aspect": "56.25%" }}
              data-v-dc6b7758=""
            ></div>
            <div
              className={`absolute top-0 left-0 text text-center mix-blend-difference text-white z-2 ${toggle ? '' : 'is-active'}`}
              data-v-dc6b7758=""
              style={{
                "--x": "602.9062500000001px",
                "--y": "339.1328125px",
              }}
              onClick={() => setToggle(!toggle)}
            >
              Toggle
              <span
                className="inline-flex relative overflow-hidden"
                data-v-dc6b7758=""
              >
                <span className="text__open inline-flex" data-v-dc6b7758="">
                  clay
                </span>
                <span
                  className='text__close inline-flex absolute top-0 left-0 whitespace-nowrap'
                  data-v-dc6b7758=""
                >
                  final
                </span>
              </span>
            </div>
            <canvas
              width="1205"
              height="678"
              className="absolute top-0 left-0 w-full h-full"
              style={{ width: "1205.81px", height: "678.266px" }}
            ></canvas>
          </div>
        </div>
        <article className="relative mt-160 s:mt-0">
          <a href="/case/glossier" className="flex flex-col relative">
            <div className="site-max flex flex-col items-center text-center">
              <h3 className="uppercase text-18">[Next project]</h3>
              <h2 className="uppercase text-60 s:text-70 leading-none mt-40 s:mt-100">
                Glossier
              </h2>
              <h4 className="font-2 text-45 s:text-90 leading-none mt-10 s:mt-0 mb-50 s:mb-100">
                (2022)
              </h4>
            </div>
            <div className="site-grid relative">
              <div className="col-start-2 s:col-start-4 col-span-4 s:col-span-6 relative">
                <div className="pt-[60%]"></div>
                <div
                  className="absolute inset-0 flip js-t-flip"
                  style={{
                    clipPath: "inset(65% 35% 0px)",
                  }}
                >
                  <figure
                    className="overflow-hidden !absolute inset-0 media-fill lazy relative w-full"
                    data-v-653e778a=""
                  >
                    <div
                      style={{ paddingTop: "100%" }}
                      data-v-653e778a=""
                    ></div>
                    <picture className="absolute inset-0" data-v-653e778a="">
                      <source
                        type="image/webp"
                        srcSet="https://www.datocms-assets.com/92457/1692388902-346300243_959632565224075_8512582370672738388_n.jpg?fit=max&amp;fm=webp&amp;h=3000&amp;w=2000"
                        data-v-653e778a=""
                      />
                      <source
                        type="image/jpg"
                        srcSet="https://www.datocms-assets.com/92457/1692388902-346300243_959632565224075_8512582370672738388_n.jpg?fit=max&amp;fm=jpg&amp;h=1920&amp;w=1920"
                        data-v-653e778a=""
                      />
                      <img
                        src="https://www.datocms-assets.com/92457/1692388902-346300243_959632565224075_8512582370672738388_n.jpg"
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        width="1440"
                        height="1440"
                        alt=""
                        data-v-653e778a=""
                        className=""
                      />
                    </picture>
                  </figure>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white invisible z-[999] js-t-dark-mask">
        <div className="animate text-[17.25vw] leading-none font-3 uppercase whitespace-nowrap overflow-hidden js-t-lab-text">
          <div className="inline-flex">
            <div className="inline-flex c-1 js-lab-l">T</div>
            <div className="inline-flex c-2 js-lab-l">h</div>
            <div className="inline-flex c-3 js-lab-l">e</div>
          </div>
          <div className="inline-flex">
            <div className="inline-flex c-4 js-lab-l">L</div>
            <div className="inline-flex c-5 js-lab-l">a</div>
            <div className="inline-flex c-6 js-lab-l">b</div>
          </div>
        </div>
      </div>
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
    </>
  );
};
