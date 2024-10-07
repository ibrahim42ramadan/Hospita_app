import { Database } from "lucide-react";
import React, { useEffect } from "react";
import PatientInfo from "../PatientInfo/PatientInfo";
import { useDispatch, useSelector } from "react-redux";
import {
  get_all_patientes,
  get_singel_patient,
} from "../../rtk/slices/patientes_slices";

export default function PatioentTable_Data() {
  // const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.patientes.allpatientes;
  });
  console.log(users);

  useEffect(() => {
    dispatch(get_all_patientes());
  }, [dispatch]);

  if (users.length == 0) {
    return <h1 className="text-center mt-8">Loading...</h1>;
  }
  return (
    <>
      <div className=" p-3 rounded-lg m-3 bg-slate-200 h-screen">
        {" "}
        <div className="flex justify-between items-center mb-3">
          <h1>Patient</h1>
          <div className="flex justify-between items-center">
            <input type="search" className="me-3 rounded-lg drop-shadow-xl " />
            <button>
              <Database />
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-green-200 ">
            <tr className="">
              <th className="p-2 text-center w-1/12">ID</th>
              <th className="p-2 text-center w-1/12">Img</th>
              <th className="p-2 text-center">Name</th>
              <th className="p-2 text-center">Age</th>
              <th className="p-2 text-center">Gender</th>
              <th className="p-2 text-center">Email</th>
              <th className="p-2 text-center">Phone</th>
              <th className="p-2 text-center">rol</th>
              <th className="p-2 text-center">type</th>
              <th className="p-2 text-center">actiones</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <PatientInfo key={user.id} patient={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
