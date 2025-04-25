import Image from "next/image";
import React from "react";
import meetingLogo from "@/app/assets/image/img2.png";
import meeting2Logo from "@/app/assets/image/img1.png";

const ManagementSection = () => {
  return (
    <div className="flex justify-center">
      <section className="py-20 px-6 container bg-white space-y-20">
        <div className="flex flex-col md:flex-row items-center  justify-between gap-5">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-4xl font-bold text-indigo-900 leading-snug">
              {" "}
              <span className="text-teal-500">
                Class Management <br />
              </span>{" "}
              Tools for Educators
            </h2>
            <p className="text-gray-700 mt-4 text-xl">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>

          <div>
            <Image
              src={meetingLogo}
              alt="meeting"
              height={700}
              width={700}
              className="rounded-xl "
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-between gap-5">
          <div>
            <Image
              src={meeting2Logo}
              alt="meeting"
              height={700}
              width={700}
              className="rounded-xl "
            />
          </div>
          <div className="max-w-md text-center md:text-right">
            <h2 className="text-4xl font-bold text-indigo-900 leading-snug">
              {" "}
              <span className="text-teal-500">
                Class Management <br />
              </span>{" "}
              Tools for Educators
            </h2>
            <p className="text-gray-700 mt-4 text-xl">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagementSection;
