import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getall_departmentes } from "../../rtk/slices/depart_slice";
import DepartmentCard from "../../components/DepartmentC/DepartmentCard ";

export default function Homepage() {
  const alldepartments = useSelector((state) => {
    return state.depart.departments;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getall_departmentes());
  }, []);
  if (alldepartments.length == 0) {
    return <p>Loading...</p>; // display loading state until data is fetched.  // you could also return a default state here.  // For demonstration purposes, I am just returning a loading message.  // In a real-world application, you should replace this with something more meaningful.  // For example, you might return a list of departments fetched from an API, or a default list if no data is available.  // In this case, the data is fetched from the store, so it will be there when the component renders.  // If the data is not available in the store, the component will render the loading message until the data is fetched.  // If you want to fetch data in the component's useEffect hook, you should use the `useEffect` hook to dispatch the action to fetch the data when the component mounts.  // If you want to fetch data in a different way, you should replace `getall_departmentes()` withs
  }
  console.log(alldepartments);
  return (
    <div>
      <section className="Hearosection">Hearosection</section>
      <section className="departmentsection">
        <div className="flex justify-center ">
          <h1 className="shadow-lg text-center  w-60 shadow-blue-300 p-1 text-2xl">
            departments
          </h1>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alldepartments.map((dep) => (
            <DepartmentCard key={dep.id} depart={dep} />
          ))}
        </div>
      </section>
    </div>
  );
}
