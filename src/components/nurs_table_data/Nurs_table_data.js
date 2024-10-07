import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_all_doctors } from "../../rtk/slices/doctors_slice";
import Personal_docroe_data from "../personal_doctor_data/Personal_docroe_data";
import { get_all_nurses } from "../../rtk/slices/nurse_slice";
import Personal_nurse_data from "../prasounal_nurse_data/persounal_nurse_data";

export default function Nurs_table_data() {
  const dispatch = useDispatch();
  const nurses = useSelector((state) => {
    return state.nurses.allnurses;
  });
  console.log(nurses);

  useEffect(() => {
    dispatch(get_all_nurses());
    // dispatch(get_singel_doctor(1)); // Mocking data for testing
  }, []);

  if (nurses.length == 0) {
    return <h1 className="text-center teaxt-2xl mt-8">Loading...</h1>;
    // Loading state when no data is available.  This is a mockup state. In a real-world application, this would be replaced with a loading spinner.  For demonstration purposes, I've left it as is.  In a real-world application, you would add a loading spinner here.  The spinner would be created using a library such as 'lucide-react' or 'react-spinners-kit'.  You would also want to handle any errors that might occur during the loading process.  In this example, I've commented out the error handling part.  In a real-world application, you would add error handling code here.  The error handling code would be a try-catch block around the code that fetches the data and would log the error to the console.  This is a mockup error handling code.  In a real-world application
  }
  return (
    <>
      <div className=" p-3 rounded-lg m-3 h-screen">
        <div>
          <h1 className="text-2xl  mb-5 font-semibold">Nurses</h1>
        </div>
        <table className="w-full">
          <thead className="bg-green-200 ">
            <tr className="">
              <th className="p-2 text-center w-1/12">ID</th>
              <th className="p-2 text-center w-1/12">Img</th>
              <th className="p-2 text-center">Name</th>
              <th className="p-2 text-center">Specialization</th>
              <th className="p-2 text-center">Experience</th>
              <th className="p-2 text-center">Email</th>
              <th className="p-2 text-center">Phone</th>
              <th className="p-2 text-center">rol</th>
              <th className="p-2 text-center">type</th>
              <th className="p-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {nurses.map((nurse) => {
              return <Personal_nurse_data nurse={nurse} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
