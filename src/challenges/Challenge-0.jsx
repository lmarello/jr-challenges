import { useNavigate } from "react-router-dom";

const Challenge = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/challenge-1");
  };

  return (
    <div>
      <p>
        <span>🚀</span>
        <span className="text-link">COMENCEMOS</span>
      </p>
    </div>
  );
};

export default Challenge;
