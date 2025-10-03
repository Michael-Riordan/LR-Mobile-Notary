import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center bg-gray-50 p-6 mt-40 rounded-xl shadow-inner">
      {/* Contact Info */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="tel:+13473061553"
      >
        <FaPhone className="w-4 h-4 text-blue-900" />
        Call Us
      </a>

      {/* Email */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="mailto:Lrmobilenotary668@gmail.com"
      >
        <FaEnvelope className="w-4 h-4 text-blue-900" />
        Email
      </a>

      {/* Location */}
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://goo.gl/maps/your-location"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMapMarkerAlt className="w-4 h-4 text-blue-900" />
        Phoenix, AZ
      </a>
              <p className="text-xs text-gray-500">
          Website by{" "}
          <a
            href="https://middlepathdigital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-900 transition"
          >
            Middle Path Digital
          </a>
        </p>
    </footer>
  );
}