import React from "react";
import { AiFillHtml5 } from "react-icons/ai";

const Experience = () => {
  const frontend = [
    {
      id: 1,
      logo: <AiFillHtml5 />,
      title: "HTML",
    },
    {
      id: 2,
      logo: <AiFillHtml5 />,
      title: "CSS",
    },
    {
      id: 3,
      logo: <AiFillHtml5 />,
      title: "JavaScript",
    },
    {
      id: 4,
      logo: <AiFillHtml5 />,
      title: "ReactJS",
    },
    {
      id: 5,
      logo: <AiFillHtml5 />,
      title: "Redux",
    },
    {
      id: 6,
      logo: <AiFillHtml5 />,
      title: "NextJS",
    },
  ];

  const backend = [
    {
      id: 1,
      logo: <AiFillHtml5 />,
      title: "NodeJS",
    },
    {
      id: 2,
      logo: <AiFillHtml5 />,
      title: "ExpressJS",
    },
    {
      id: 3,
      logo: <AiFillHtml5 />,
      title: "Python",
    },
    {
      id: 4,
      logo: <AiFillHtml5 />,
      title: "AWS",
    },
    {
      id: 5,
      logo: <AiFillHtml5 />,
      title: "MongoDB",
    },
    {
      id: 6,
      logo: <AiFillHtml5 />,
      title: "Postgresql",
    },
  ];
  return (
    <div
      class="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-md shadow-blue-600 rounded-lg p-8">
            <p className="py-4 flex justify-center text-2xl font-bold">Frontend Development</p>
            <div className="grid grid-cols-2">
              {frontend.map(({ id, logo, title }) => (
                <div key={id} className="flex items-center p-2 hover:scale-105 duration-200">
                  <div className="mr-2">{logo}</div>
                  <div>{title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="shadow-md shadow-red-600 rounded-lg p-8">
          <p className="py-4 flex justify-center text-2xl font-bold">Backend Development</p>
          <div className="grid grid-cols-2">
            {backend.map(({ id, logo, title }) => (
              <div key={id} className="flex items-center p-2 hover:scale-105 duration-200">
                <div className="mr-2">{logo}</div>
                <div>{title}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
