import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  image: string;
  video?: string;
  alt: string;
  className?: string;
  autoPlay?: boolean;
  priority?: boolean;
};

export function MediaFrame({
  image,
  video,
  alt,
  className,
  autoPlay = false,
  priority = false,
}: MediaFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    const media = videoRef.current;
    if (!media || !video) return;

    const sync = () => {
      setPlaying(!media.paused && !media.ended);
    };

    media.addEventListener("play", sync);
    media.addEventListener("pause", sync);
    media.addEventListener("ended", sync);

    if (autoPlay) {
      void media.play().catch(() => setPlaying(false));
    } else {
      sync();
    }

    return () => {
      media.removeEventListener("play", sync);
      media.removeEventListener("pause", sync);
      media.removeEventListener("ended", sync);
    };
  }, [autoPlay, video]);

  function play() {
    const node = videoRef.current;
    if (!node) return;
    void node.play();
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-muted", className)}>
      {video ? (
        <video
          ref={videoRef}
          className="aspect-video h-full w-full object-cover"
          poster={image}
          muted
          loop
          playsInline
          autoPlay={autoPlay}
          preload={priority ? "metadata" : "none"}
          aria-label={alt}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt={alt} className="aspect-video h-full w-full object-cover" />
      )}

      {video && !playing ? (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 flex items-center justify-center bg-emerald-ink/20 transition-[background-color] duration-200 ease-out hover:bg-emerald-ink/30"
          aria-label={`Play video: ${alt}`}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-holo/92 text-emerald-ink shadow-[var(--shadow-border)]">
            <Play className="size-5 translate-x-px fill-current" />
          </span>
        </button>
      ) : null}

      {video ? (
        <span className="absolute top-3 left-3 rounded-full bg-holo/88 px-2.5 py-1 text-[0.65rem] font-medium tracking-[0.14em] text-emerald-ink uppercase">
          Video
        </span>
      ) : null}
    </div>
  );
}
