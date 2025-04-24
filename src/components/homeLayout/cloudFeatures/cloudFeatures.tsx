import React from "react";
import { FaCalendarAlt, FaFileInvoiceDollar, FaUsers } from "react-icons/fa";

const CloudFeatures = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar className="text-2xl" />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",
    },
    {
      icon: <FaCalendarAlt className="text-2xl" />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
    },
  ];

  return (
    <div className="flex justify-center">
      <section className="container py-16 px-4 bg-white text-center">
        <h2 className="text-3xl font-bold mb-3">
          All-In-One <span className="text-cyan-600">Cloud Software</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>

        <div className="grid md:grid-cols-3 py-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl border border-gray-100 p-6 flex  flex-col items-center"
            >
              <div className="bg-blue-500 p-3 rounded-full  -mt-12 shadow-md mb-4 text-white">
                {feature?.icon}
              </div>
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {feature?.title}
              </h1>
              <p className="text-sm text-gray-600">{feature?.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CloudFeatures;
