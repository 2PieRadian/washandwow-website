"use client";

import { WixMadeForDisplayFont } from "@/app/fonts";
import OrangeGradientButton from "../ui/buttons/OrangeGradientButton";
import { useRef, useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Daniel S.",
    review:
      "Amazing service! My clothes come back fresh, neatly folded, and perfectly clean every single time. The attention to detail is incredible and I couldn't be happier with the results.",
    rating: 5,
    avatar: "/images/reviews/avatar1.png",
  },
  {
    id: 2,
    name: "John Doe",
    review:
      "I'm so impressed with the quality of care they give to my delicate items. The pickup was on time, delivery was seamless, and my clothes have never looked better. Highly recommended!",
    rating: 5,
    avatar: "/images/reviews/avatar2.png",
  },
  {
    id: 3,
    name: "Priya M.",
    review:
      "Super convenient pickup and delivery service. The app makes scheduling so easy and I love getting real-time updates on my order status. This has been a total game changer for my busy lifestyle!",
    rating: 5,
    avatar: "/images/reviews/avatar3.png",
  },
  {
    id: 4,
    name: "Rahul K.",
    review:
      "Best laundry service in the city! Professional staff who are always on time, and my clothes smell absolutely amazing every time. Can't imagine going back to doing laundry myself ever again.",
    rating: 5,
    avatar: "/images/reviews/avatar4.png",
  },
  {
    id: 5,
    name: "Sneha T.",
    review:
      "Finally found a service I can completely trust with my expensive suits and formal wear. The dry cleaning quality is excellent and they handle everything with such care and professionalism.",
    rating: 5,
    avatar: "/images/reviews/avatar5.png",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-[2px]">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-[#FFB800]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-[#FFFFFF] rounded-[37px] border border-[#F4EFEE] px-[24px] sm:px-[30px] py-[32px] sm:py-[40px] shadow-[0px_4px_20px_rgba(0,0,0,0.06),inset_4px_4px_22.1px_#FFFFFF] flex flex-col items-center text-center w-full h-[360px] sm:h-[380px] select-none">
      {/* Avatar */}
      <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-b from-[#B8E986] to-[#7EC850] p-[3px] mb-[20px]">
        <div className="w-full h-full rounded-full bg-[#87CEEB] flex items-center justify-center overflow-hidden">
          <div className="w-[40px] h-[40px] rounded-full bg-[#FFD699] mt-[15px]"></div>
        </div>
      </div>

      {/* Quote Icon */}
      <div className="text-[#FF9431] text-[32px] font-serif leading-none mb-[10px]">
        "
      </div>

      {/* Review Text */}
      <p className="text-[#5E5450] md:text-[18px] leading-relaxed flex-1">
        {review.review.length > 100
          ? review.review.slice(0, 100).trim() + "..."
          : review.review}
      </p>

      {/* Name & Stars - Always at bottom */}
      <div className="mt-auto">
        <h4 className="text-[#91776C] font-semibold text-[16px] sm:text-md mb-[8px]">
          {review.name}
        </h4>
        <StarRating rating={review.rating} />
      </div>
    </div>
  );
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastX = useRef(0);
  const animationRef = useRef<number | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  const duplicatedReviews = [...reviews, ...reviews];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastX.current = e.pageX;
    velocityRef.current = 0;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (Math.abs(velocityRef.current) > 0.5 && scrollRef.current) {
      const momentum = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollLeft -= velocityRef.current;
        velocityRef.current *= 0.95;
        if (Math.abs(velocityRef.current) > 0.5) {
          animationRef.current = requestAnimationFrame(momentum);
        } else {
          setIsPaused(false);
        }
      };
      animationRef.current = requestAnimationFrame(momentum);
    } else {
      setTimeout(() => setIsPaused(false), 1000);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
    velocityRef.current = e.pageX - lastX.current;
    lastX.current = e.pageX;
  };

  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    const singleSetWidth = scroll.scrollWidth / 2;

    const autoScroll = () => {
      if (!scroll || isPaused || isDragging) {
        autoScrollRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      scroll.scrollLeft += 0.5;

      if (scroll.scrollLeft >= singleSetWidth) {
        scroll.scrollLeft = scroll.scrollLeft - singleSetWidth;
      }

      autoScrollRef.current = requestAnimationFrame(autoScroll);
    };

    autoScrollRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current);
    };
  }, [isPaused, isDragging]);

  return (
    <section
      id="reviews"
      className="py-[60px] sm:py-[80px] md:py-[100px] bg-[#FDFBF9]"
    >
      {/* Header */}
      <div className="text-center max-w-[700px] mx-auto mb-[40px] sm:mb-[50px] px-[20px]">
        <span className="text-[#FF9431] font-medium text-[16px] sm:text-lg">
          Customer Testimonials
        </span>
        <h2
          className={`text-[#2D2D2D] text-2xl sm:text-3xl font-semibold mt-[8px] ${WixMadeForDisplayFont.className}`}
          style={{ fontFamily: WixMadeForDisplayFont.style.fontFamily }}
        >
          What Our Customers Are Saying
        </h2>
        <p className="text-[#6B635C] text-[16px] sm:text-md mt-[12px]">
          Real stories from our satisfied customers who trust us with their
          laundry and love the results.
        </p>
      </div>

      {/* Horizontal Scrollable Reviews */}
      <div className="max-w-[1200px] mx-auto px-[20px] relative">
        {/* Left fade overlay */}
        <div className="absolute left-[20px] top-0 bottom-0 w-[60px] sm:w-[80px] bg-gradient-to-r from-[#FDFBF9] to-transparent z-10 pointer-events-none" />

        {/* Right fade overlay */}
        <div className="absolute right-[20px] top-0 bottom-0 w-[60px] sm:w-[80px] bg-gradient-to-l from-[#FDFBF9] to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className={`overflow-x-auto pb-[20px] scrollbar-hide ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            handleMouseUp();
            setIsPaused(false);
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsPaused(true)}
        >
          <div className="flex gap-[20px] w-max px-[60px] sm:px-[80px] py-[20px]">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[300px] sm:w-[360px] shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Read More Button */}
      {/* <div className="flex justify-center mt-[30px] sm:mt-[40px] px-[20px]">
        <OrangeGradientButton className="rounded-full px-[32px] sm:px-[40px] py-[14px] sm:py-[16px] text-[15px] sm:text-base font-semibold">
          Read More Reviews
        </OrangeGradientButton>
      </div> */}
    </section>
  );
}
