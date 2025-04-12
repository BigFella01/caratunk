"use client";

import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="flex items-center justify-center bg-background px-4 py-20 text-text">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Contact Caratunk Contractors
        </h2>
        <p className="mb-6 text-lg">
          We&apos;re happy to answer your questions and inquiries. Reach out to us
          directly through any of the platforms below:
        </p>

        <ul className="space-y-6 text-lg">
          {/* Instagram */}
          <li className="flex items-center justify-center gap-3">
            <FaInstagram className="text-2xl text-pink-500" />
            <a
              href="https://instagram.com/caratunk_contractors?igsh=Ym9wbHAzY245NG1w"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @caratunk_contractors
            </a>
          </li>

          {/* Facebook */}
          <li className="flex items-center justify-center gap-3">
            <FaFacebook className="text-2xl text-blue-600" />
            <a
              href="https://www.facebook.com/people/Caratunk-Contractors/61550600411175/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Caratunk Contractors on Facebook
            </a>
          </li>

          {/* Email */}
          <li className="flex items-center justify-center gap-3">
            <span className="font-semibold">Email:</span>
            <a
              href="mailto:caratunkcontractors@gmail.com"
              className="text-primary hover:underline"
            >
              caratunkcontractors@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
