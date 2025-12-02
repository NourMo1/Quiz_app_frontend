import { useNavigate } from "react-router-dom";
import resultImage from "../assets/result.jpg";
import ResultTable from "../components/ResultTable";
import { useDispatch, useSelector } from "react-redux";
import { resetQeustionActions } from "../redux/questionsSlice";
import { resetResultActions, setEarnPoints } from "../redux/resultSlice";
import { useEffect } from "react";
import useSetResult from "../hooks/setResult";

const Result = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {questions, answers} = useSelector((state) => state.questions)
  const {result, username} = useSelector((state) => state.result)

  const handleAnotherQuiz = () => {
    dispatch(resetQeustionActions())
    dispatch(resetResultActions())
    navigate("/")
  }

  // Result table calculations
  const quizPoints = questions.length * 10;

  function numOfAttemps(result) {
    return result.filter(r => r !== undefined).length;
  }
  const attemps = numOfAttemps(result);
  
  function numOfEarnPoints(result, answers, points) {
    return result.map((element, index) => answers[index] === element).filter(i => i).map(i => points).reduce((prev, curr) => prev + curr, 0)
  }
  const earnPoints = numOfEarnPoints(result, answers, 10);

  useEffect(() => {
    dispatch(setEarnPoints(earnPoints));
  }, [ dispatch, earnPoints])
  
  function flagStatus(quizPoints, earnPoints) {
    let status = (quizPoints * 50 / 100) < earnPoints
    if (status){
      return status
    }
  }
  const flag = flagStatus(quizPoints, earnPoints)

  useSetResult({username, results: result, attemps, earnPoints, flag: flag ? "Passed" : "Failed"});
  
  return (
    <div className="bg-[#EFECE3] min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 pt-35 px-4 py-10 md:px-6 lg:px-8">
          <h3 className="text-[#4A70A9] text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
            Hey {username}, <br /> here’s your final result
          </h3>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm md:text-lg text-left text-black rtl:text-right text-body mb-10">
              <thead className="text-sm md:text-lg text-body bg-neutral-secondary-medium">
                <tr>
                  <th
                    scope="col"
                    className="py-3 rounded-s-base font-medium"
                  ></th>
                  <th
                    scope="col"
                    className="py-3 rounded-e-base font-medium text-end"
                  >
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-primary">
                  <th
                    scope="row"
                    className="py-4 font-medium text-heading whitespace-nowrap"
                  >
                    Quiz points
                  </th>
                  <td className="py-4 text-end">{quizPoints}</td>
                </tr>
                <tr className="bg-neutral-primary">
                  <th
                    scope="row"
                    className="py-4 font-medium text-heading whitespace-nowrap"
                  >
                    Attemps
                  </th>
                  <td className="py-4 text-end">{attemps}</td>
                </tr>
                <tr className="bg-neutral-primary">
                  <th
                    scope="row"
                    className="py-4 font-medium text-heading whitespace-nowrap"
                  >
                    Earn points
                  </th>
                  <td className="py-4 text-end">{earnPoints}</td>
                </tr>
              </tbody>
            </table>
            <ResultTable
              attemps={attemps}
              earnPoints={earnPoints}
              flag={flag}
            />
          </div>
        </div>
        <div className="quiz-image col-span-12 md:col-span-6 place-content-center place-items-center px-4 py-10 md:px-6 lg:px-8 md:h-screen filter backdrop-blur-2xl bg-[#f5f5f5] rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl flex flex-col justify-center">
          <img
            className="w-[400px] h-[400px] object-contain mb-10"
            src={resultImage}
            alt="Result image"
          />
          <button
            type="button"
            onClick={handleAnotherQuiz}
            className="bg-[#8FABD4] text-white cursor-pointer font-medium md:text-lg border-0 rounded-xl px-4 py-1 sm:px-6 sm:py-1.5 md:px-8 lg:px-9 lg:py-2"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result