import { Country } from "../components";
import { countries } from "../constants";

export const Challenge = () => {
  const country = countries[2];

  return (
    <>
      <div className="countries-container">
        <Country name={country.name} flag={country.flag} />
      </div>
    </>
  );
};

export default Challenge;
