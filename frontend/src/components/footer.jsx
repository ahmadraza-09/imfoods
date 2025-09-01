import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-200">
        {/* Main Footer */}
        <div className="py-16 px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Information</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", link: "index.html" },
                  { name: "About Us", link: "about-us/index.html" },
                  { name: "Certificates", link: "certificates/index.html" },
                  { name: "Products Range", link: "product-range/index.html" },
                  { name: "Become Supplier", link: "#" },
                  { name: "Blogs", link: "blog/index.html" },
                  { name: "Careers", link: "careers/index.html" },
                  { name: "Contact Us", link: "contact-us/index.html" },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      className="flex items-center hover:text-white"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Range */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Products Range</h3>
              <ul className="space-y-2">
                {[
                  "Grains and Cereal",
                  "Pulses",
                  "Spices",
                  "Fruits",
                  "Vegetables",
                  "Oilseeds",
                  "Floriculture",
                  "Herbs",
                  "Dry Fruits",
                  "Beverages",
                  "Dehydrated Products",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/index.html`}
                      className="flex items-center hover:text-white"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branches */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Branches</h3>
              <ul className="space-y-2">
                {["Pune", "Mumbai", "Bangalore"].map((branch) => (
                  <li key={branch}>
                    <a
                      href="contact-us/index.html#branches"
                      className="flex items-center hover:text-white"
                    >
                      <ChevronRight size={14} className="mr-2" />
                      {branch}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Connected */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <MapPin className="mr-3 mt-1" size={18} />
                  <p>
                    <strong>Registered address:</strong>
                    <br />
                    33/15, Prashant Bunglow,
                    <br />
                    Opp. Garware College,
                    <br />
                    Karve Road, Pune 411004 India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-3" size={18} />
                  <p>9765758899 / 7219115858</p>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3" size={18} />
                  <a
                    href="mailto:inquiry@pisumfoods.com"
                    className="hover:text-white"
                  >
                    inquiry@pisumfoods.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="https://www.youtube.com/channel/UC5J8ax1tO3F5jDPhGFql-ZQ"
              target="_blank"
              rel="noopener"
              className="hover:text-red-500"
            >
              <Youtube size={22} />
            </a>
            <a
              href="https://www.facebook.com/pisumfoods"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-500"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://twitter.com/pisumfoods"
              target="_blank"
              rel="noopener"
              className="hover:text-sky-400"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://www.linkedin.com/company/pisum-food-services"
              target="_blank"
              rel="noopener"
              className="hover:text-blue-400"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/pisumfoods/"
              target="_blank"
              rel="noopener"
              className="hover:text-pink-500"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 py-6 text-center text-sm">
          <p>
            Copyright © 2020{" "}
            <a
              href="http://www.btwgroup.co/"
              target="_blank"
              rel="noopener"
              className="underline hover:text-white"
            >
              A BTW Group Company
            </a>{" "}
            | Designed by{" "}
            <a
              href="https://wgbl.co/"
              target="_blank"
              rel="noopener"
              className="underline hover:text-white"
            >
              WGBL India
            </a>{" "}
            - Design Agency
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
