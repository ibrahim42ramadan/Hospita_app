import { CircleArrowLeft, Contact, Settings, UserRoundCog } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashbordSidebarLayout = () => {
  const navto = useNavigate();
  // حالة للتحكم في إظهار وإخفاء الشريط الجانبي
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // دالة لتبديل الحالة
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="bg-slate-400 flex ">
      {/* Sidebar */}
      <div
        id="siedbar"
        className={`${
          isSidebarVisible ? "block" : "hidden"
        } z-10   md:flex flex-col w-40 bg-gray-800 text-white h-screen items-center  `}
      >
        <h2 className="text-lg font-semibold mb-6">Sidebar</h2>
        <ul className="space-y-4 w-full">
          <li>
            <button
              className="flex mb-2 items-center justify-around w-full p-2 bg-gray-700 rounded-lg transition-colors"
              onClick={(e) => {
                // console.log(e.target.classList);

                navto("patients");
              }}
            >
              <UserRoundCog />
              Patients
            </button>
          </li>
          <li>
            <button
              className="flex  mb-2 items-center justify-around w-full p-2 bg-gray-700 rounded-lg transition-colors"
              onClick={(e) => {
                // console.log(e.target.classList);

                navto("doctors_data");
              }}
            >
              <Contact />
              Doctors
            </button>
          </li>
          <li>
            <button
              className="flex  mb-2 items-center justify-around w-full p-2 bg-gray-700 rounded-lg transition-colors"
              onClick={(e) => {
                // console.log(e.target.classList);

                navto("nurse_data");
              }}
            >
              <Contact />
              Nurse
            </button>
          </li>
          <li>
            <button
              className="flex  mb-2 items-center justify-around w-full p-2 bg-gray-700 rounded-lg transition-colors"
              onClick={(e) => {
                // console.log(e.target.classList);

                navto("adding");
              }}
            >
              <UserRoundCog />
              New User Round
            </button>
          </li>

          {/* المزيد من الأزرار هنا */}
        </ul>
      </div>

      {/* زر التحكم في الشريط الجانبي */}
      <div className="absolute top-4 left-4 z-20">
        {!isSidebarVisible ? (
          <button
            id="stting"
            className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 block md:hidden transition-colors"
            onClick={toggleSidebar}
          >
            <Settings />
          </button>
        ) : (
          <button
            id="to"
            className="bg-slate-500 p-2 rounded-lg block md:hidden transition-colors"
            onClick={toggleSidebar}
          >
            <CircleArrowLeft />
          </button>
        )}
      </div>

      {/* المحتوى الرئيسي */}
    </div>
  );
};

export default DashbordSidebarLayout;
