"use client";

import { useEffect, useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import Container from "../layout/Container";
import { certificates } from "@/data/certificates";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CertificatesSection() {
  const INITIAL_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, INITIAL_COUNT);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="Certificates" className="py-24 px-6 border-t border-white/10">
      <Container>
        <h2 data-aos="fade-up" className="text-4xl font-bold text-white mb-12">
          Certificates
        </h2>

        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8 mb-8">
          {displayedCertificates.map((cert) => (
            <CertificateCard
              key={cert.title}
              certificateTitle={cert.title}
              issuedBy={cert.issuer}
              year={cert.year}
              image={cert.image}
              file={cert.file}
            />
          ))}
        </div>

        {certificates.length > INITIAL_COUNT && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primaryDark transition duration-300"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
