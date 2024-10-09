import companyVideo from "../assets/companyVideo.mp4";

export default function CompanyVideo() {
  return (
    <div className="w-full h-[56.25rem]">
      <video
        className="size-full object-contain"
        src={companyVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
}
