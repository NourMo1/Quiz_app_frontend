import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/questionsSlice";

const useFetchData = () => {
  const dispatch = useDispatch();
  const [fetchState, setFetchState] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  // Get all questions from database
  async function getAllQuestions(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const data = await response.json();
      return data.data;
    } catch (err) {
      throw new Error("ERROR:", err.message);
    }
  }

  useEffect(() => {
    setFetchState({ data: null, error: null, isLoading: true });

    (async () => {
      try {
        const [{ questions, answers }] = await getAllQuestions(
          `https://quiz-app-backend-0k30.onrender.com/api/questions`
        );

        if (!questions || questions.length === 0) {
          throw new Error("No questions found in the database.");
        }
        setFetchState({
          data: { questions, answers },
          isLoading: false,
          error: null,
        });

        dispatch(
          actions.startQuiz({
            questions,
            answers,
          })
        );
      } catch (error) {
        setFetchState({
          data: null,
          isLoading: false,
          error: error.message || "An unknown error occurred",
        });
      }
    })();
  }, [dispatch]);

  return [fetchState, setFetchState];
};

export default useFetchData;