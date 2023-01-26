import React from "react";
import SubTitle from "../components/SubTitle";
import User from "../components/User";
import Quote from "../components/Quote";
import Header from "../components/Header";
import ChipsCross from "../components/ChipsCross";
import ChipsPlus from "../components/ChipsPlus";

const chips = ["React.js", "JavaScript", "Redux"];

const chipsPlus = [
  "React",
  "MySQL",
  "HTML",
  "python",
  "Node.js",
  "HTML 5",
  "iOS",
  "PHP",
];

function Screen02({ screenChange }) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-wrap">
        <div id="left" className="mt-28 w-full lg:mt-0 lg:flex-1 lg:px-12 lg:pt-32 px-4">
          <SubTitle
            text="What skills would you like to see in your new hire?"
            className={"mb-6 md:mt-10"}
          />

          <input
            placeholder="Desired area of expertise (eg. JavaScript, Ruby etc)"
            className="border border-gray-300 w-full p-4 rounded"
          />

          <div className="flex gap-2 mt-4">
            {chips.map((chip, index) => (
              <ChipsCross text={chip} key={"chip-cross" + chip + index} />
            ))}
          </div>
          <p className="flex my-8">
            Popular skills for{" "}
            <button className="flex font-semibold ml-2">
              Software Developers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </p>
          <div className="flex gap-2 mt-4 max-w-md flex-wrap">
            {chipsPlus.map((chipPlus, index) => (
              <ChipsPlus text={chipPlus} key={"chip-plus" + chipsPlus + index} />
            ))}
          </div>
          <div className="border-t border-gray-200 mt-8 flex justify-end pt-6">
            <button
              onClick={() => screenChange(1)}
              className="rounded-full border border-black hover:bg-black hover:text-white  min-w-[150px] py-2 px-8"
            >
              Back
            </button>
            <button className="rounded-full border border-black bg-black hover:bg-white hover:text-black text-white min-w-[150px] py-2 px-8 ml-4">
              Next: Joining
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

export default Screen02;
