import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrescriptions } from "../../rtk/slices/Prescription_slice";
import PrescriptionCard from "../../components/PrescriptionCard/PrescriptionCard";

export default function PrescriptionList() {
  const localuser = JSON.parse(localStorage.getItem("user"));
  console.log(localuser);
  const dispatch = useDispatch();
  const PrescriptionList = useSelector((state) => {
    const pureprescriptions = state.Prescription.prescriptions;

    const myprescriptions = pureprescriptions.filter((prescription) => {
      return prescription.patient.id == localuser.id;
    });
    return myprescriptions;
  });
  console.log(PrescriptionList);

  useEffect(() => {
    dispatch(getPrescriptions());
  }, []);
  if (PrescriptionList.length == 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="  gap-4  ">
      {PrescriptionList.map((prescription) => (
        <PrescriptionCard key={prescription.id} prescription={prescription} />
      ))}
    </div>
  );
}
