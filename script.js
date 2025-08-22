// JavaScript
gsap.registerPlugin(ScrollTrigger); // 플러그인 등록

const hor = document.querySelector("#hor");
const sections = gsap.utils.toArray("#hor > section");


gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: hor,
    start: "top top",
    end: () => "+=" + (hor.offsetWidth - innerWidth),
    pin: true,
    scrub: 1,
    snap: {
      snapTo: 1 / (sections.length - 1),
      inertia: false,
      duration: { min: 0.1, max: 0.1 },
    },
    invalidateOnRefresh: true,
    anticipatePin: 1,
  },
});

//Main//
gsap.to("#box", {
  y: 80,
  duration: 1,
  ease: "bounce.out" // 바운스 효과 적용
});



