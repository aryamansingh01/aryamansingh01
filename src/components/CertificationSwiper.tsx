import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const certifications = [
  {
    title: "Microsoft Certified PowerBI Data analyst Associate",
    organization: "Microsoft",
    date: "October 2024",
    description: " Mastered interactive dashboards and data visualization in PowerBI, enhancing stakeholder insights",
    instructors: "Microsoft"
  },
  {
    title: "Snowpro Core Certified",
    organization: "Snowflake",
    date: "December 2024",
    description: " demonstrating proficiency in Snowflake platform design, development, and scalable data solutions.",
    instructors: "Snowflake"
  },
  {
    title: "Academy Accreditation - Databricks Lakehouse Fundamentals",
    organization: "Databricks",
    date: "September 2024",
    description: " Completed with 95% proficiency in Lakehouse architecture, focusing on scalable data processing.",
    instructors: "Databricks"
  },
  {
    title: "Academy Accreditation - Databricks Fundamentals",
    organization: "Databricks",
    date: "September 2024",
    description: "Acquired strong skills in Databricks workflows, big data management, and collaborative analytics.",
    instructors: "Databricks"
  },
  {
    title: "AWS cloud Practitioner Essentials",
    organization: "AWS",
    date: "Aug 2022",
    description: "Achieved 98% understanding of AWS cloud services, security, and infrastructure.",
    instructors: "AWS"
  }
];

export const CertificationSwiper = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-[300px] h-[400px]"
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index} className="bg-gray-900/90 rounded-xl p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-blue-400 mb-2">{cert.organization}</p>
            <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
            <p className="text-gray-300 flex-grow mb-4">{cert.description}</p>
            <p className="text-gray-400 text-sm mt-auto">
              Instructed by: {cert.instructors}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
