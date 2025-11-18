import Image from "next/image";

const ImgBlock = ({ src, alt, className }: any) => {
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center justify-center">
        {/* TODO: Get actual image dimensions */}
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={630}
          className="rounded-md object-cover w-full max-w-2xl"
        />
      </div>
      <p className="caption-bottom text-center text-sm text-gray-600 mt-2">
        {alt}
      </p>
    </div>
  );
};

export default ImgBlock;

