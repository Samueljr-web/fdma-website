import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div className="py-24">
      <h2 className="text-center font-bold text-2xl">About Us!</h2>
      <div>
        <section className="flex lg:justify-between lg:flex-row flex-col items-center pt-10">
          <div data-aos="fade-down">
            <img
              src="./assets/home-img.png"
              alt="about"
              className="w-[30rem]"
            />
          </div>
          <div className="lg:w-[50%] w-[80%] mt-10 mx-5" data-aos="fade-down">
            <p className="text-justify">
              In today’s increasingly dynamic world, quality education is key to
              success. At Favoured Destinies Montessori Academy, we are focused
              on impacting the requisite knowledge and skills required to gain
              an advantage in a highly competitive world. We are dedicated to
              bringing out the Genius in your child; Academically and Socially
              with our unique blend of Academics, Co-Academic and
              extracurricular activities. Be best assured that your child is in
              proper hands. We believe every child a born genius.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
