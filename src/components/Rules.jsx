const Rules = () => {
  
  const quizRules = [
    {
      id: 1,
      text: "You will be asked 10 questions one after another.",
    },
    {
      id: 2,
      text: "10 points is awarded for the correct answer.",
    },
    {
      id: 3,
      text: "Each question has four options. You can choose only one option.",
    },
    {
      id: 4,
      text: "You can review and change answers before the quiz finish.",
    },
    {
      id: 5,
      text: "The result will be declared at the end of the quiz.",
    },
  ];
  
  return (
    <div className="rules">
      <ul className="flex flex-col gap-5 justify-center font-medium text-lg md:text-xl">
        {quizRules.map((rule) => {
          return (
            <li className="text-[#4A70A9]" key={rule.id}>
              {rule.id}. {rule.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Rules