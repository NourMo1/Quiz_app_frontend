import { useEffect, useRef } from "react";

const useSetResult = (result) => {
  const hasSaved = useRef(false);

  useEffect(() => {
    const { username, results } = result;
    if (!username || !results) return;
    if (hasSaved.current) return;

    const addResults = async (url, resultData) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(resultData),
        });
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();
        console.log("Result saved:", data);
      } catch (err) {
        console.error("Failed to save result:", err.message);
      }
    };

    const serverHost =
      import.meta.env.REACT_APP_API_HOSTNAME || "http://localhost:4000";
    addResults(`${serverHost}/api/results`, result);

    hasSaved.current = true;
  }, [result]);
};

export default useSetResult;
