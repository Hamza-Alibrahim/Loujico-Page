// src/components/PortfolioSection.jsx
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplitLineHeader from "./SplitLineHeader";
import { motion } from "framer-motion";

const PortfolioSection = ({ title, id, data }) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setSlidesToShow(1);
    } else if (window.innerWidth <= 1024) {
      setSlidesToShow(2);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="py-10 bg-[#153457] text-white">
      <div className="container mx-auto sm:px-5">
        {/* العناوين - تم إعادتها هنا */}
        <SplitLineHeader title={t(title)} isSubtitle={true} />

        <Slider {...settings}>
          {data.map((project, index) => (
            <motion.div
              key={project.id}
              className="p-4"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="bg-white rounded-xl shadow-xl overflow-hidden 
                        hover:shadow-2xl transition-all duration-300 transform 
                        hover:-translate-y-2 group h-[280px] flex flex-col"
              >
                {/* الجزء العلوي - اسم العميل (تم تغيير لون الخلفية) */}
                <div className="bg-[#7899B2] text-white p-4 flex items-center justify-center h-1/2">
                  <h3 className="text-3xl font-extrabold text-center group-hover:text-[var(--main-color)] transition duration-300">
                    {t(project.customer)}
                  </h3>
                </div>

                {/* الجزء السفلي - التفاصيل */}
                <div className="flex-grow p-4 text-[#1F476F] flex flex-col justify-center">
                  <p
                    className={`flex items-center text-lg mb-2 ${
                      language === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="font-semibold text-[#B88647] mr-2">
                      {t("portfolio.location")}
                    </span>
                    {t(project.location)}
                  </p>
                  <p
                    className={`flex items-center text-lg ${
                      language === "ar" ? "flex-row-reverse" : ""
                    }`}
                  >
                    <span className="font-semibold text-[#B88647] mr-2">
                      {t("portfolio.activity")}
                    </span>
                    {t(project.activity)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PortfolioSection;
