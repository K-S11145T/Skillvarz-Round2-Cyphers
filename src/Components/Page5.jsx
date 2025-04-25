import React, { useState, useRef, useEffect } from "react";
import { SlArrowRight } from "react-icons/sl";
import BlurText from "../Animations/BlurText";
import gsap from "gsap";

const Page5 = () => {
  const products = [
    {
      name: "ACTION-III",
      price: "$2999",
      model: "ACTION-III",
      details:
        "Marshall ACTION-III combines classic rock-inspired design with bold sound performance. Experience deep bass, clear highs, and seamless Bluetooth 5.2 connectivity in a compact, stylish speaker.",
      ratings: "4.9 Stars",
      image: "/Page-5/Subs.jpeg",
    },
    {
      name: "Major V.",
      price: "$1999",
      model: "Major V.",
      details:
        "Major V. delivers exceptional sound quality with advanced noise cancellation and a sleek, modern design. Perfect for music lovers on the go.",
      ratings: "4.7 Stars",
      image: "/Page-5/Speaker2.jpg",
    },
    {
      name: "Motif 2",
      price: "$2499",
      model: "Motif 2",
      details:
        "Motif 2 offers a perfect balance of style and performance with its compact design and powerful sound output. Ideal for any setting.",
      ratings: "4.8 Stars",
      image: "/Page-5/Speaker3.jpeg",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const detailsRef = useRef(null);
  const containerRef = useRef(null);

  // Initial animation on component mount
  useEffect(() => {
    gsap.from(detailsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.2)",
    });
  }, []);

  // Animation on product change
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate out current content
    tl.to(detailsRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.3,
      ease: "power1.in",
    });

    // Change content
    tl.add(() => {
      // Content updates automatically through state change
    }, "-=0.2"); // Slight overlap

    // Animate in new content from below
    tl.fromTo(
      detailsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.2)",
      }
    );
  }, [selectedProduct]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div
      className="flex-none w-screen h-screen text-white text-xl"
      style={{
        backgroundImage: `url(${selectedProduct.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.8s ease-in-out",
      }}
      ref={containerRef}
    >
      <div className="relative flex items-top justify-start w-full h-screen flex flex-col">
        {/* Details container */}
        <div className="Card-containter relative w-[30%] lg:h-[80%] bg-[#EDEDED]">
          <div className="text-black font-[Saans] text-sm lg:text-lg 2xl:text-xl lg:mt-20 2xl:mt-24 lg:ml-5 2xl:ml-10">
            <span className="text-[#A29C9C] mr-1">Product |</span>
            <span>Speakers</span>

            <div className="w-full flex items-start justify-between lg:mt-5 2xl:mt-12">
              <h1 className="ProdcutModel xl:text-4xl 2xl:text-4xl font-[Aux-Mono]">
                <BlurText
                  text={selectedProduct.model}
                  animateBy="letters"
                  direction="bottom"
                  delay={0.03}
                />
              </h1>
              <h3 className="Ratings flex border-b-2 gap-2 border-[#A29C9C] 2xl:text-2xl lg:text-2xl font-[Silk-Serif-Light-Italic] mr-8 ">
                {selectedProduct.ratings.split(" ")[0]}
                <sup className="text-[#000000] text-sm lg:text-base">Stars</sup>
              </h3>
            </div>

            <div className="w-full ">
              <h4
                ref={detailsRef}
                className="ProductDetails font-[Saans] lg:text-lg lg:mt-[-7%]  2xl:mt-0 text-[#A29C9C] lg:w-[85%] 2xl:w-[95%] lg:leading-6 2xl:leading-8"
                style={{ opacity: 0 }}
              >
                {selectedProduct.details}
              </h4>

              <div className="flex justify-between w-[26%] lg:w-[32%] lg:mt-2 2xl:mt-2">
                <div className="circle-1 lg:h-6 lg:w-6 2xl:h-10 2xl:w-10 rounded-full bg-[#060606]"></div>
                <div className="circle-2 lg:h-6 lg:w-6 2xl:h-10 2xl:w-10 rounded-full bg-[#824820]"></div>
                <div className="circle-3 lg:h-6 lg:w-6 2xl:h-10 2xl:w-10 rounded-full bg-[#E8E0D5]"></div>
              </div>
              <div className="Readmore relative group overflow-hidden font-[Aux-Mono] cursor-pointer lg:h-fit lg:w-fit lg:px-3 lg:py-2 2xl:px-0 2xl:py-0 2xl:h-12 2xl:w-45 bg-[#000] rounded-full flex items-center justify-center  text-[#EDEDED] lg:mt-3 2xl:mt-5 ">
                <h1 className="group-hover:translate-y-[150%] duration-300 translate-y-[0%]">
                  Read more
                </h1>
                <h1 className="absolute bottom-1/2 text-zinc-300 group-hover:translate-y-[50%] duration-300 translate-y-[-150%]">
                  Read More
                </h1>
              </div>
            </div>

            <div className="delivery-container w-full lg:text-sm 2xl:text-base mt-4 pr-8 flex 2xl:items-end 2xl:justify-end flex-col">
              <div className="w-full h-12 flex items-center justify-between border-b-2 border-[#A29C9C]">
                <h2>Delivery Time</h2>
                <h2 className="text-[#A29C9C]">4-7 days</h2>
              </div>
              <div className="w-full h-12 flex items-center justify-between">
                <h2>Returns, Warranty & Payments</h2>
                <span className="text-[#A29C9C]">
                  <SlArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom container */}
        <div className="BottomContainer w-[70%] h-[20%] absolute right-0 bottom-0 flex">
          <div className="Price w-[50%] bg-[#1E1E1E] text-[8vw] flex items-center justify-center h-full font-[Silk-Serif-Light-Italic]">
            {selectedProduct.price}
          </div>
          <div className="ProductNames w-[50%] h-full lg:px-6 xl:pb-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="justify-between flex lg:h-10 2xl:h-12 items-center border-b-2 border-[#FFFFFF] cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <h1 className="lg:text-xl 2xl:text-3xl font-[Montserrat]">
                  {product.name}
                </h1>
                <h3 className="lg:text-xl 2xl:text-3xl font-[Silk-Serif-Light-Italic]">{`0${
                  index + 1
                }`}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
