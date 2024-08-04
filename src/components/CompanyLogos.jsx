import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`mt-50 ${className} id="features"`}>
      <h1 className="tagline mb-6 text-center text-n-1/50 text-[1.25rem]">
        Helping people create beautiful content at
      </h1>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] hover:transform hover:scale-110"
            style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
            key={index}
          >
            <img src={logo} width={84} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
