import React from "react";

const Banner = () => {
  const backgroundRadialGradientStyles = {
    backgroundColor: "hsl(218, 41%, 15%)",
    backgroundImage:
      "radial-gradient(650px circle at 0% 0%, hsl(218, 41%, 35%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%), radial-gradient(1250px circle at 100% 100%, hsl(218, 41%, 45%) 15%, hsl(218, 41%, 30%) 35%, hsl(218, 41%, 20%) 75%, hsl(218, 41%, 19%) 80%, transparent 100%)",
  };

  return (
    <div>
      <section
        className="background-radial-gradient mb-14 "
        style={backgroundRadialGradientStyles}
      >
        <div className="px-6 py-12 text-center md:px-12 lg:text-left h-screen">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center md:gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mt-0 mb-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-6xl text-[hsl(218,81%,95%)]">
                  The best Tuition <br />
                  <span className="text-[hsl(218,81%,75%)]">
                    Service for you
                  </span>
                </h1>
                <h1 className=" text-3xl tracking-tight font-semibold text-[hsl(218,81%,95%)]">
                  Find the Right Tutor in Your Area
                </h1>
              </div>
              <div className="mb-12  flex justify-center">
                <img
                  src="data:image/png;base64,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"
                  className="w-full lg:w-10/12 sm:h-[100px] md:h-[350px] rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
