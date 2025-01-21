import ReactPlayer from "react-player/vimeo";

export default function CompanyVideo() {
  return (
    <div className="mb-32">
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          className="absolute top-0 left-0"
          url="https://player.vimeo.com/video/1041410776?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="100%"
          height="100%"
          controls
          light
          playing
        />
      </div>
    </div>
  );
}
