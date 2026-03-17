import React from "react";

export default function OrangeGradientButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const buttonStyles =
    "bg-gradient-to-l from-[#FF7700] via-[#FE922E] to-[#F8BB7A] shadow-[2px_2px_12.4px_-2px_#FD7801] text-white font-medium cursor-pointer";

  return <button className={`${buttonStyles} ${className}`}>{children}</button>;
}
