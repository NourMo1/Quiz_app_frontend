
const Footer = () => {
  return (
    <footer className="bg-[#1B3132] text-white w-full z-20 fixed bottom-0 start-0">
      <div className="flex flex-col p-4 md:px-6 lg:px-8 gap-2">
        <p>1/3 Answered</p>
        <div className="bar w-[90%] sm:w-[80%] md:w-[50%] h-1.5 border border-white rounded-full">
          <div className="bar-fill"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer