import { FaSpinner } from "react-icons/fa";
import { Loading } from "../styles/Styles";

const Loader = () => {
  return (
    <Loading>
      <FaSpinner className="loader" />
    </Loading>
  );
};

export default Loader;
