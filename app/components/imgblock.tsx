const ImgBlock = ({ src, alt, className }: any) => {
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center justify-center">
        <img src={src} alt={alt} className="rounded-md object-cover" />
      </div>
      <p className="caption-bottom text-center">{alt}</p>
    </div>
  );
};

export default ImgBlock;
