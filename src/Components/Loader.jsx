import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Loader = () => {
  const circle = useRef(null);
  const imgDiv = useRef(null);
  const marshallH2 = useRef(null);
  const artistRef = useRef(null);
  const artist2Ref = useRef(null);
  const productsRef = useRef(null);
  const loaderRef = useRef(null);
  const artists = [
    "Taylor Swift",
    "Drake",
    "Beyoncé",
    "Ed Sheeran",
    "The Weeknd",
    "Billie Eilish",
    "Harry Styles",
    "Doja Cat",
    "Post Malone",
    "Dua Lipa",
    "Kendrick Lamar",
    "Olivia Rodrigo",
    "Bruno Mars",
    "Ariana Grande",
    "Justin Bieber",
    "Rihanna",
    "Lady Gaga",
    "Sam Smith",
    "Shawn Mendes",
    "Lizzo",
    "SZA",
    "Halsey",
    "Lil Nas X",
    "Miley Cyrus",
  ];

  const artists2 = [
    "Elvis Presley",
    "Frank Sinatra",
    "Whitney Houston",
    "Michael Jackson",
    "Prince",
    "Madonna",
    "Elton John",
    "Stevie Wonder",
    "Celine Dion",
    "Mariah Carey",
    "Adele",
    "John Lennon",
    "Paul McCartney",
    "Freddie Mercury",
    "David Bowie",
    "Bob Dylan",
    "Aretha Franklin",
    "Janet Jackson",
    "James Brown",
    "Barbra Streisand",
    "Phil Collins",
    "George Michael",
    "Eric Clapton",
    "Rod Stewart",
  ];

  const products = [
    "Major IV",
    "Stanmore II",
    "Kilburn II",
    "Acton II",
    "Uxbridge Voice",
    "Mode II",
    "Motif ANC",
    "Minor III",
    "Emberton II",
    "Woburn II",
    "Stockwell II",
    "Middleton",
    "Tufton",
    "Willen",
    "Monitor II ANC",
    "Home Line II",
    "Portable Line",
    "Bluetooth Line",
    "Voice Line",
    "Multi-Room Line",
    "Classic Line",
    "Signature Line",
    "Studio Line",
    "Performance Line",
  ];

  useGSAP(() => {
    // const circleTimeline = gsap.timeline();
    const artistTimeline = gsap.timeline();

    gsap.to(circle.current, {
      rotation: 360,
      duration: 5,
      ease: "linear",
    });

    const circleTimeline = gsap.timeline();

    // Define manual positions for the circle
    const positions = [
      { top: "10%", left: "20%" },
      { top: "30%", left: "50%" },
      { top: "70%", left: "80%" },
      { top: "50%", left: "30%" },
      { top: "20%", left: "70%" },
      { top: "50%", left: "50%" },
    ];

    // Animate the circle through the predefined positions
    positions.forEach((pos) => {
      circleTimeline.to(circle.current, {
        scale: 1,
        top: pos.top,
        left: pos.left,
        duration: 1, // Duration for each movement
        ease: "power2.inOut", // Smooth easing
      });
    });

    circleTimeline
      .to(
        circle.current,
        {
          scale: 0.8,
          duration: 0.3,
        },
        "same"
      )
      .to(
        imgDiv.current,
        {
          scale: 0.8,
          duration: 0.3,
        },
        "same"
      )
      .to(imgDiv.current, {
        scale: 1,
        duration: 0.4,
      })
      .to(circle.current, {
        opacity: 0,
        display: "none",
      })
      .to(marshallH2.current, {
        opacity: 0,
      });

    circleTimeline
      .to(loaderRef.current, {
        background: "transparent",
        duration: 0.1,
      })
      .to(loaderRef.current, {
        display: "none",
      });

    const artistH2s = artistRef.current.querySelectorAll("h2");
    const artist2H2s = artist2Ref.current.querySelectorAll("h2");
    const productH2s = productsRef.current.querySelectorAll("h2");

    // Animate the h2 elements
    artistTimeline
      .to(
        artistH2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        artistH2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        artistH2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    artistTimeline
      .to(
        artist2H2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        artist2H2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        artist2H2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    artistTimeline
      .to(
        productH2s,
        {
          opacity: 1,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "one"
      )
      .to(
        productH2s,
        {
          color: "#fff",
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "two"
      )
      .to(
        productH2s,
        {
          opacity: 0,
          duration: 0.15,
          stagger: 0.075,
          ease: "power2.out",
        },
        "three"
      );

    return () => {
      circleTimeline.kill();
      artistTimeline.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed z-[999] h-screen w-screen bg-black text-white overflow-hidden flex justify-between items-center px-2 py-4 lg:px-12 lg:py-15 font-[Aux-mono] text-sm font-[100]"
    >
      <div
        ref={imgDiv}
        className="w-[99vw] h-[35vh] lg:w-[40vw] lg:h-[48vh] absolute z-[20] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      >
        <img
          src="./Page-1/BlackNWhite.png"
          alt=""
          className="w-full h-full object-cover"
        />

        <h2
          ref={marshallH2}
          className="absolute -bottom-7 text-zinc-300 right-0 text-base"
        >
          Marshall
        </h2>
      </div>

      <div className="flex justify-between w-full lg:w-fit gap-15 ">
        <div ref={artistRef} className="">
          <h2 className="mb-3 uppercase opacity-0">Artist</h2>
          {artists.map((elem, index) => (
            <h2 className="text-[#6C6B6B] opacity-0">{elem}</h2>
          ))}
        </div>
        <div ref={artist2Ref} className="">
          <h2 className="mb-3 uppercase text-end opacity-0">Artist</h2>
          {artists2.map((elem, index) => (
            <h2 className="text-end text-[#6C6B6B] opacity-0">{elem}</h2>
          ))}
        </div>
      </div>

      <div ref={productsRef} className="px-2 py-2 hidden lg:block w-[20%]">
        <h2 className="mb-3 uppercase opacity-0">Product</h2>
        {products.map((elem, index) => (
          <h2 className="text-[#6C6B6B] opacity-0">{elem}</h2>
        ))}
      </div>

      <div
        ref={circle}
        className="circle scale-[0] z-[99] absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 flex items-center justify-center rounded-full text-xs leading-none text-zinc-200 font-[Aux-mono] font-light border-1 border-zinc-200"
      >
        <p className="text-3xl font-light font-[Saans]">+</p>

        <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0 flex flex-col items-center justify-center">
          <h4 className="">2021</h4>
          <p className="text-2xl leading-none font-light font-[Saans]">+</p>
        </div>
        <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 rotate-90 flex flex-col items-center justify-center">
          <h4 className="">2021</h4>
          <p className="text-2xl leading-none font-light font-[Saans]">+</p>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-180 flex flex-col items-center justify-center">
          <h4 className="">2021</h4>
          <p className="text-2xl leading-none font-light font-[Saans]">+</p>
        </div>
        <div className="absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rotate-[-90deg] flex flex-col items-center justify-center">
          <h4 className="">2021</h4>
          <p className="text-2xl leading-none font-light font-[Saans]">+</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
