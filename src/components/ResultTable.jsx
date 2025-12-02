const ResultTable = ({ attemps, earnPoints, flag }) => {
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-2xl overflow-hidden">
      <table className="w-full text-sm md:text-lg text-left rtl:text-right text-body">
        <thead className="text-sm md:text-lg text-body bg-[#8FABD4] text-[#1B3132]">
          <tr className="text-center">
            <th scope="col" className="px-6 py-3 font-medium">
              
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Attemps
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Earn points
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#EFECE32] text-black text-center">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Total Points
            </th>
            <td className="px-6 py-4">{attemps}</td>
            <td className="px-6 py-4">{earnPoints}</td>
            <td
              className={`px-6 py-4 ${
                flag ? "text-green-600" : "text-red-600"
              }`}
            >
              {flag ? "Passed" : "Failed"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable