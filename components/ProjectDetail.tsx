import Image from "next/image";
import Link from "next/link";

type ProjectDetailProps = {
  title: string;
  description?: string;
  techStack?: string[];
  image?: string;
  github?: {
    label: string;
    url: string;
  }[];
  liveDemo?: string;
};

export default function ProjectDetail({
  title,
  description,
  techStack,
  image,
  github,
  liveDemo,
}: ProjectDetailProps) {
  return (
    <div className="max-w-3xl w-full bg-background rounded-2xl overflow-hidden">
      {image && (
        <div className="w-full relative overflow-hidden rounded-t-xl group/image">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="object-cover rounded-t-xl transition-transform duration-300 group-hover/image:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {/* INFO */}
      <div className="mt-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>

          {description && (
            <p className="text-secondary text-sm mb-2 text-justify">
              {description}
            </p>
          )}

          {techStack && (
            <div className="flex flex-wrap gap-2 mt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 items-center border-t border-secondary/20 pt-4 mt-4 ">
          {github && github.length > 0 && (
            <>
              {github?.map((repo) => (
                <Link
                  key={repo.url}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {repo.label}
                </Link>
              ))}
            </>
          )}

          {liveDemo && (
            <Link
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-primary text-sm font-medium hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
