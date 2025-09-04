// src/components/Footer.jsx
import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaPinterest,
  FaSnapchat,
  FaTelegram,
} from "react-icons/fa";
import { FooterData } from "../data";

const Footer = () => {
  const SocialIcons = {
    FaLinkedin: FaLinkedin,
    FaTwitter: FaTwitter,
    FaFacebook: FaFacebook,
    FaInstagram: FaInstagram,
    FaYoutube: FaYoutube,
    FaTiktok: FaTiktok,
    FaWhatsapp: FaWhatsapp,
    FaPinterest: FaPinterest,
    FaSnapchat: FaSnapchat,
    FaTelegram: FaTelegram,
  };

  return (
    <footer className="bg-[#0B1A2C] text-gray-300 py-10 sm:px-5" id="follow-us">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Section 1: Brand Info & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/public/assets/image/logo.png" // تأكد من وجود الصورة في مجلد public
              alt="Loujico Logo"
              className="w-32 h-auto mb-3"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              {FooterData.mainInfo.description}
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {FooterData.quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-[#B88647] transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">
              Contact Info
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm">
                  {FooterData.contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${FooterData.contactInfo.email}`}
                  className="text-sm hover:text-[#B88647] transition-colors duration-300"
                >
                  {FooterData.contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${FooterData.contactInfo.phone}`}
                  className="text-sm hover:text-[#B88647] transition-colors duration-300"
                >
                  {FooterData.contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Social Media Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xl font-semibold mb-5 text-white">Follow Us</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {FooterData.socialLinks.map((social) => {
                const IconComponent = SocialIcons[social.icon];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-[#B88647] transition-colors duration-300 transform hover:scale-110"
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 mt-10 pt-6 border-t border-gray-700">
          <p className="text-xs leading-relaxed">
            &copy; {new Date().getFullYear()} Loujico. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
