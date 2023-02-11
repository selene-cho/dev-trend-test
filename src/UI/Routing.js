import ProgressBar from "./ProgressBar";
import QuestionPage from "../component/QuestionPage/QuestionPage";

const Routing = ({ result, data, tendencyData }) => {
  return (
    <>
      <ProgressBar result={result} />
      <QuestionPage data={data} tendencyData={tendencyData} />
    </>
  );
};

export default Routing;
