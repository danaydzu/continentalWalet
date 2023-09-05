const header = document.querySelector(".header");

function myAutoKillFunction() {
  console.log(header.classList.contains("hide-header"));
  if (!header.classList.contains("hide-header")) {
    header.classList.add("hide-header");
  }
}

ScrollTrigger.normalizeScroll(true);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.3,
    pin: true,
    effects: true,
  });
}

document.querySelector(".home-btn").addEventListener("click", (e) => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  gsap.to(window, { duration: 2, scrollTo: "main" });

  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});
document.querySelector(".about_us-btn").addEventListener("click", (e) => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  gsap.to(window, { duration: 2, scrollTo: "#aboutUs" });
  setTimeout(() => {
    myAutoKillFunction();
  }, 2000);

  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});
document.querySelector(".apps-btn").addEventListener("click", (e) => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  gsap.to(window, { duration: 2, scrollTo: "#apps" });
  setTimeout(() => {
    myAutoKillFunction();
  }, 2000);
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});
document.querySelector(".dowloand-btn").addEventListener("click", (e) => {
  // scroll to the spot where .box-c is in the center.
  // parameters: element, smooth, position
  gsap.to(window, { duration: 2, scrollTo: "#dowloand" });
  setTimeout(() => {
    myAutoKillFunction();
  }, 2000);
  // or you could animate the scrollTop:
  // gsap.to(smoother, {
  //  scrollTop: smoother.offset(".box-c", "center center"),
  //  duration: 1
  // });
});

const tl = gsap.timeline();
tl.fromTo(
  ".brand__wrap img",
  {
    x: 50,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  0.6
)
  .fromTo(
    ".brand__header",
    {
      x: -50,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    0.3
  )
  .fromTo(
    ".brand__title",
    {
      y: -30,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.9
  )
  .fromTo(
    ".decoration",
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    },
    1.2
  );
gsap.fromTo(
  ".decoration--wavy-line",
  {
    xPercent: -100,
    opacity: 0,
  },
  {
    xPercent: 0,
    opacity: 1,
    duration: 1,
  }
);

gsap.to(".brand__wrap", {
  scrollTrigger: {
    trigger: ".brand",
    start: "top top",
    scrub: true,
  },
  yPercent: -50,
  scale: 0.7,
  opacity: 0,
});
gsap.fromTo(
  ".information__title",
  {
    scale: 0.7,
    opacity: 0,
  },
  {
    scale: 1,
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".brand",
      start: "90% center",

      end: "300px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".information__text",
  {
    xPercent: 50,
    opacity: 0,
  },
  {
    xPercent: 0,
    duration: 1,
    scale: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: ".brand",
      start: "90% center",
      end: "300px",
      scrub: true,
    },
  }
);
gsap.fromTo(
  ".information__border-1",
  {
    y: -10,
    opacity: 0,
    scaleX: 0,
  },
  {
    y: 0,
    scaleX: 1,

    opacity: 1,
    scrollTrigger: {
      trigger: ".brand",
      start: "90% center",

      end: "300px",
      scrub: true,
    },
  }
);
gsap.fromTo(
  ".information__border-2",
  {
    scaleX: 0,
    opacity: 0,
    y: 10,
  },
  {
    y: 0,
    scaleX: 1,

    opacity: 1,
    scrollTrigger: {
      trigger: ".brand",
      start: "90% center",

      end: "300px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".information__item",
  {
    scale: 0,

    y: 10,
  },
  {
    y: 0,
    scale: 1,

    scrollTrigger: {
      trigger: ".information__title",
      start: "top center",

      end: "200px center",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".app img",
  {
    scale: 0,

    y: 10,
  },
  {
    y: 0,
    scale: 1,

    opacity: 1,
    scrollTrigger: {
      trigger: ".information__item-five",
      start: "top center",

      end: "45%",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".decoration--checkmark",
  {
    xPercent: -30,
  },
  {
    xPercent: 0,
    scale: 1,

    opacity: 1,
    scrollTrigger: {
      trigger: ".information__item-one",
      start: "top center",

      end: "25%",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".decoration--semicircle",
  {
    opacity: 0,
  },
  {
    opacity: 1,

    scrollTrigger: {
      trigger: ".brand",
      start: "80% center",

      end: "800px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".download__title",
  {
    opacity: 0,
    x: -30,
  },
  {
    opacity: 1,
    x: 0,

    scrollTrigger: {
      trigger: ".app",
      start: "80% center",
      end: "+=200px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".download__text",
  {
    opacity: 0,
    xPercent: -20,
  },
  {
    opacity: 1,
    xPercent: 0,

    scrollTrigger: {
      trigger: ".app",
      start: "90% center",
      end: "+=300px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".information__border-3",
  {
    opacity: 0,
    scaleX: 0,
  },
  {
    opacity: 1,
    xPercent: 0,
    scaleX: 1,

    scrollTrigger: {
      trigger: ".app",
      start: "80% center",
      end: "+=300px",

      scrub: true,
    },
  }
);

gsap.fromTo(
  ".download__item-text",
  {
    opacity: 0.5,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,

    scrollTrigger: {
      trigger: ".download__title",
      start: "-50%top center",
      end: "+=100px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".download__link",
  {
    opacity: 0,
    scale: 0,
    yPercent: 100,
  },
  {
    opacity: 1,
    scale: 1,
    yPercent: 0,

    scrollTrigger: {
      trigger: ".download__title",
      start: "-40%top center",
      end: "+=150",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".download__image",
  {
    opacity: 0,

    xPercent: 50,
  },
  {
    opacity: 1,

    xPercent: 0,

    scrollTrigger: {
      trigger: ".app",
      start: "80% center",
      end: "+=300px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".decoration--mark",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,

    scrollTrigger: {
      trigger: ".app",
      start: "80% center",
      end: "+=200px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".mobile-app__title",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,

    scrollTrigger: {
      trigger: ".feedback",
      start: "70% center",
      end: "+=200px",

      scrub: true,
    },
  }
);
gsap.fromTo(
  ".mobile-app__wrap-image",
  {
    opacity: 0,

    xPercent: 50,
  },
  {
    opacity: 1,

    xPercent: 0,

    scrollTrigger: {
      trigger: ".feedback",
      start: "70% center",
      end: "+=500",

      scrub: true,
    },
  }
);
