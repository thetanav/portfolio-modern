export default function BGVideo() {
  const src =
    "https://755fek2ywq.ufs.sh/f/Yn9HHQfmcuN2YsrGiGfmcuN2BA95gtxYrF7Sea16RdpPjb8z";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        src={src}
        playsInline
        preload="none"
        className="w-full h-full object-cover brightness-[0.70]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_55%,rgba(0,0,0,0.55)_100%)]" />
    </div>
  );
}
