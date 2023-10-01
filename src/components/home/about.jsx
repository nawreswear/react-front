import React from "react";
import { Heading } from "../common/Heading";
import about from '../../style/about.css'
export const About = () => {
  // Placeholder sales statistics data
  const salesStatistics = [
    { year: 2020, totalSales: 1500000 },
    { year: 2021, totalSales: 2200000 },
    { year: 2022, totalSales: 2800000 },
  ];

  return (
    <div >
    <section className='about'>
      <Heading title='About Us'className='about1' desc='Learn more about our electronics store' />
      <div className='about-content'>
        <div className='about-text'>
          <h2>Welcome to Our Electronics Store</h2>
          <p>
            At Our Electronics Store, we are dedicated to providing you with the latest and greatest in electronics products. With a wide range of high-quality gadgets and devices, we cater to tech enthusiasts, hobbyists, and professionals alike.
          </p>
          <p>
            Our mission is to offer top-notch customer service, competitive prices, and a seamless shopping experience. Whether you're looking for smartphones, laptops, smart home devices, or accessories, we've got you covered.
          </p>
          <p>
            We're committed to staying up-to-date with the ever-evolving technology landscape and bringing you the latest innovations in electronics. Explore our selection and discover the future of tech at Our Electronics Store!
          </p>
        </div>
        <div className='about-image'>
          <img src='/images/OIP.jpg' alt='About Us'/>
        </div>
      </div>
      <div className='sales-statistics'>
        <h3>Sales Statistics</h3>
        <ul className="nn">
          {salesStatistics.map((statistic) => (
            <li key={statistic.year} className="nn">
              <strong className="nn">{statistic.year}:</strong> {statistic.totalSales.toLocaleString()}DT
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  );
};

export default About;
