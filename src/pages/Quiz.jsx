import { useDispatch, useSelector } from "react-redux";
import quiz from "../assets/quiz.jpg";
import Questions from "../components/Questions";
import { nextQuestion, prevQuestion } from "../redux/questionsSlice";
import { useNavigate } from "react-router-dom";
import { pushResult } from "../redux/resultSlice";
import { useState } from "react";

const Quiz = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {questions, trace} = useSelector((state) => state.questions);
  const [checkedAnswer, setCheckedAnswer] = useState(undefined);

  const onNextQuestion = () => {
    if (trace < questions.length - 1) {
      dispatch(nextQuestion());
      dispatch(pushResult(checkedAnswer));
    } else {
      navigate("/result");
    }
  }

  const onPrevQuestion = () => {
    dispatch(prevQuestion())
  };

  const onSelectAnswer = (answer) => {
    setCheckedAnswer(answer);
  }
  
  return (
    <div className="bg-[#EFECE3] min-h-screen">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 place-items-center pt-45 px-4 py-10 md:px-6 lg:px-8">
          <Questions onSelectAnswer={onSelectAnswer} />
          <div className="buttons w-full flex justify-between">
            <button
              onClick={onPrevQuestion}
              className={
                trace > 0
                  ? `text-black cursor-pointer font-medium md:text-lg border border-white rounded-xl px-4 py-1 sm:px-6 sm:py-1.5 md:px-8 lg:px-9 lg:py-2 mr-4`
                  : `opacity-0`
              }
            >
              Previous
            </button>
            <button
              onClick={onNextQuestion}
              className="text-black cursor-pointer font-medium md:text-lg border border-white rounded-xl px-4 py-1 sm:px-6 sm:py-1.5 md:px-8 lg:px-9 lg:py-2"
            >
              {trace < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
        <div className="quiz-image col-span-12 md:col-span-5 place-content-center place-items-center px-4 py-10 md:px-6 lg:px-8 md:h-screen filter backdrop-blur-2xl bg-white rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl flex flex-col justify-center">
          <img
            className="w-[400px] h-[400px] object-contain"
            src={quiz}
            alt="Quiz image"
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;