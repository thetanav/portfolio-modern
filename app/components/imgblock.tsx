"use client";

const ImgBlock = ({ src, alt, className }: any) => {
  return (
    <div className="w-full">
      <img src={src} className="rounded-md mx-auto" alt={alt} />
      <p className="caption-bottom text-center">{alt}</p>
    </div>
  );
};

export default ImgBlock;
