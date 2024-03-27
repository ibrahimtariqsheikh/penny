import React from "react";

const Features = () => {
  return (
    <main>
      <section className="flex items-center justify-center gap-10 ">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20  py-2 lg:py-4 place-content-center">
            <div className="border-t-2 border-neutral-300 my-8 py-4 lg:py-8 space-y-2 flex items-center justify-center flex-col w-48 sm:w-60">
              <h1 className="text-4xl font-bold">Step 1</h1>
              <p className="text-muted-foreground">Launch</p>
            </div>
            <div className="border-t-2 border-neutral-300 my-8 py-4 lg:py-8 space-y-2 flex items-center justify-center flex-col">
              <h1 className="text-4xl font-bold ">Step 2</h1>
              <p className="text-muted-foreground">Moon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features;
