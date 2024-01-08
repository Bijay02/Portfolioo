import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ex
          labore vitae dignissimos fugiat nihil vero rerum delectus sit ea
          reiciendis est nisi cum facere iste quibusdam totam quasi aspernatur
          quia, aperiam sunt incidunt nulla. Odio incidunt quidem minus enim
          molestiae aspernatur, nobis esse ducimus quae, est, quasi iusto?
          Voluptas.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quod voluptate voluptas voluptatem assumenda culpa eos magnam
          quisquam. Mollitia officiis perferendis saepe eum quod id, numquam
          voluptatibus, aliquam, voluptate quasi cum. Similique nisi voluptates
          tempora aliquam molestiae quisquam consequuntur, odio beatae impedit
          quaerat voluptatum mollitia optio asperiores ipsum quos soluta.
        </p>
      </div>
    </div>
  );
};

export default About;
