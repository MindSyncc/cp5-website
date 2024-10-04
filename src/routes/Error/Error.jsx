import { ErrorStyle } from "../../routes/Error/ErrorStyle";
import error from "../../assets/error.jpg";

const Error = () => {
  return (
    <ErrorStyle>
      <div className="erro">
        <img src={error} alt="Erro" />
      </div>
    </ErrorStyle>
  );
};

export default Error;
