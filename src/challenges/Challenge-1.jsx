import { Country } from "../components";
import { countries } from "../constants";

const Challenge = () => {
  const country = countries[0];

  return (
    <div className="countries-container">
      <Country name={country.name} flag={country.flag} />
    </div>
  );
};

export default Challenge;
