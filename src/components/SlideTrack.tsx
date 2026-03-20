import Image from "next/image";

interface SlideTrackProps {
  className: string;
}

function SlideTrack({ className }: SlideTrackProps) {
  const images = [
    "html",
    "css",
    "js",
    "next",
    "react",
    "tailwind",
    "nodejs",
    "mongodb",
    "express",
    "firebase",
    "appwrite",
    "vscode",
    "git",
    "aws",
    "java",
    "typescript",
  ];

  return (
    <div id="logos" className={`w-full rounded-2xl p-2 ${className}`}>
      <div className="grid grid-cols-4 gap-3">
        {images.map((item) => (
          <Image
            key={item}
            src={`https://skillicons.dev/icons?i=${item}`}
            alt={`${item} logo`}
            width={80}
            height={80}
            className="h-20 w-20 transition hover:scale-110"
            title={item.toUpperCase()}
            unoptimized
          />
        ))}
      </div>
    </div>
  );
}

export default SlideTrack
