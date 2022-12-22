import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faComments,
  faHandHoldingDollar,
  faMoneyBillTrendUp,
  faPeopleLine,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="flex flex-col items-center my-8 mx-8 sm:mx-10 lg:mx-24 gap-4"
    >
      <div className="w-full text-center text-4xl leading-none">
        <h1>TAX-COMPANY</h1>
        <h1>Assisting Your Businesses Success</h1>
        <p className="text-blue-400 text-sm font-extrabold">
          ____________________
        </p>
      </div>
      <div className="text-center max-w-2xl space-y-5">
        <p>
          Processing Taxes and Accountancy can be time consuming, but it is an
          absolute necessity for your business to operate successfully. At
          Tax-Indo we do the hard work, so you don’t have to!
        </p>
        <p>
          Our experienced, friendly team has helped hundreds of businesses &amp;
          individuals with their financial needs, so you no longer need to
          stress looking for a reliable partner.
        </p>
        <p>
          With competitive prices, a dedication to your brands success and
          knowledgeable experts ready to assist – it is no wonder why Tax-Indo
          is fast becoming Indonesia Premier Tax consultancy.
        </p>
        <p>
          We offer a variety of services for all business needs including, Tax
          &amp; Accountancy, Payroll Management, Company Set-up, Trademark
          registration, VAT Registration, BPJS Registration, as well as
          assisting Visas for foreign employees.
        </p>
        <p>
          Contact us for a free 1-hour consultation to see how we can help you
          too.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faChartColumn}
          />
          <h2>industry Expert</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faHandHoldingDollar}
          />
          <h2>Competitive pricing</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faPeopleLine}
          />
          <h2>Multi-lingual staff</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faMoneyBillTrendUp}
          />
          <h2>Trendsetter</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faShieldAlt}
          />
          <h2>Reliable</h2>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <FontAwesomeIcon
            className="hover:scale-110 text-blue-500 text-6xl"
            icon={faComments}
          />
          <h2>industry Expert</h2>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
