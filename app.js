//Openscreen DelayScroll Magic

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 1,
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "100%",
    scrub: 1,
  },
});

tl.fromTo(".sliding-text", { y: 0 }, { y: -400 });
tl2.fromTo(
  ".logo",
  { scale: 6 },
  { scale: 2, top: "2vw", left: "6vw", x: "50%", y: "50%" }
);

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".home",
    start: "0%",
    end: "1000%",
    scrub: 1,
    pin: true,
    pinSpacing: false,
  },
});
