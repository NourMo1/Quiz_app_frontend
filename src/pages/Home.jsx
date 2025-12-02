import { useNavigate } from "react-router-dom";
import Rules from "../components/Rules";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/resultSlice";

const Home = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleInputs = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    dispatch(setUsername(name))
    navigate("/quiz")
  }
  
  return (
    <div className="bg-[#EFECE3] min-h-screen text-black">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 pt-45 px-4 py-10 md:px-6 lg:px-8">
          <h1 className="text-[#4A70A9] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-10">
            Master Coding. <br />
            One Question at a Time.
          </h1>
          <p className="text-black font-light w-full sm:w-[80%] md:w-[70%] text-xl lg:text-2xl mb-10">
            Begin your quiz journey now! Test your knowledge, challenge
            yourself, and see how far you've come.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 place-content-center px-4 py-10 md:px-6 lg:px-8 md:h-screen filter backdrop-blur-2xl bg-white rounded-t-4xl md:rounded-tr-none md:rounded-l-4xl flex flex-col justify-center">
          <Rules />
          <form id="form" onSubmit={handleInputs} className="mt-10">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="text-black block mb-2.5 font-medium text-xl lg:text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-[90%] sm:w-[70%] md:w-[60] lg:w-[50%] py-2 px-6 border-2 border-[#EFECE3] rounded-xl outline-0 focus:border-black placeholder:text-black/30 transition-all duration-300 ease-in-out"
                placeholder="John"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#8FABD4] text-white cursor-pointer font-medium md:text-lg border-0 rounded-xl px-4 py-1 sm:px-6 sm:py-1.5 md:px-8 lg:px-9 lg:py-2"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home