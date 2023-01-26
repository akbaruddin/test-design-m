import React, { useState } from "react";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Job from "../components/Job";
import User from "../components/User";
import Quote from "../components/Quote";
import Header from "../components/Header";

const jobs = [
  {
    title: "Developers",
    subTitle: "Software Developers, Data Scientists, DevOps, and QA",
  },
  {
    title: "Designers",
    subTitle: "Web, Mobile, UI/UX, Branding, and Visual Designers",
  },
  {
    title: "Project Managers",
    subTitle:
      "Digital Project Managers, IT Project Managers, Scrum Masters, and Agile Coaches",
  },
  {
    title: "Product Managers",
    subTitle: "Digital Product Managers, Product Owners, and Business Analysts",
  },
];

function Screen01({ screenChange }) {
  const [checked, setChecked] = useState(jobs[0]);

  const getNewUser = (user) => {
    setChecked(user);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-wrap">
        <div id="left" className="mt-28 lg:mt-0 lg:flex-1 lg:px-12 lg:pt-32 px-4">
          <Title
            text="Thank you for your interest in Markovate."
            className={"mb-12"}
          />
          <SubTitle
            text="What role would you like to hire?"
            className={"mb-6"}
          />
          {jobs.map((job) => (
            <Job
              {...job}
              key={'job' + job.title}
              checked={checked}
              onChange={getNewUser}
            />
          ))}
          <div className="border-t border-gray-200 mt-8 flex justify-end pt-6">
            <button className="rounded-full border border-black hover:bg-black hover:text-white  min-w-[150px] py-2 px-8">
              Back
            </button>
            <button onClick={() => screenChange(2)} className="rounded-full border border-black bg-black hover:bg-white hover:text-black text-white min-w-[150px] py-2 px-8 ml-4">
              Get Started
            </button>
          </div>
        </div>
        <div id="right" className="bg-black w-full mt-10 py-10 lg:mt-0 lg:py-0 lg:w-1/3 lg:pt-32">
          <User
            image="/user.jpg"
            name="Edward Pascual, PSM"
            title="Project Manager at Trapeze Group"
          />
          <Quote
            className={"mt-24"}
            text={
              "The excellent design and stability of the app has pleased internal stakeholders. We are very happy with their service."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Screen01;
