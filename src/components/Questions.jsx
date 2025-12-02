import useFetchData from "../hooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../redux/resultSlice";

const Questions = () => {

  const dispatch = useDispatch();
  const [{ isLoading, data, error }] = useFetchData();
  const { questions, trace } = useSelector((state) => state.questions);
  const { result } = useSelector((state) => state.result);

  const checked = (index) => {
    dispatch(updateResult({ trace, answer: index }));
  };

  // Display loading state
  if (isLoading) {
    return (
      <div className="questions-container">
        <h3 className="text-[#4A70A9] text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
          Loading question...
        </h3>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="questions-container">
        <h3 className="text-[#4A70A9] text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
          Error: {error}. Please try again.
        </h3>
      </div>
    );
  }

  // Display no data/empty state
  if (!data) {
    return (
      <div className="questions-container">
        <h3 className="text-[#4A70A9] text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
          No questions available.
        </h3>
      </div>
    );
  }

  return (
    <div className="questions-container">
      <h3 className="text-[#4A70A9] text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
        {questions[trace].question}
      </h3>
      <ul className="mb-10">
        <div className="my-form flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10">
          {questions[trace].options.map((option, index) => {
            return (
              <div key={index} className="flex items-center gap-x-2 lg:text-lg xl:text-xl">
                <input
                  onChange={() => checked(index)}
                  checked={result[trace] === index}
                  id={`radio-${index + 1}`}
                  value={option}
                  type="radio"
                  name="option"
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 cursor-pointer"
                />
                <label
                  htmlFor={`radio-${index + 1}`}
                  className="cursor-pointer"
                >
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default Questions;