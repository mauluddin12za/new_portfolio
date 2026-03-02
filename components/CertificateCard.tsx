import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

type CertificateCardProps = {
  certificateTitle: string;
  issuedBy: string;
  year: string | number;
  image?: string;
  file?: string;
};

export default function CertificateCard({
  certificateTitle,
  issuedBy,
  year,
  image,
  file,
}: CertificateCardProps) {
  return (
    <Card>
      {/* IMAGE */}
      {image && (
        <div className="w-full relative">
          <Link href={`${image}`} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={certificateTitle}
              width={1000}
              height={1000}
              className="object-cover rounded-t-xl"
              priority
            />
          </Link>
        </div>
      )}

      {/* INFO */}
      <div className="mt-5 flex flex-col justify-between h-40">
        <div>
          <h3 className="text-white font-semibold text-lg mb-1">
            {certificateTitle}
          </h3>
          <p className="text-secondary text-sm">
            {issuedBy} • {year}
          </p>
        </div>

        {/* DOWNLOAD BUTTON */}
        {file && (
          <Link
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border-t border-secondary/20 pt-4 inline-block text-primary text-sm font-medium hover:underline"
          >
            View / Download
          </Link>
        )}
      </div>
    </Card>
  );
}
