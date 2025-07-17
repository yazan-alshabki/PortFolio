import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <>
          <div className="w-28 h-28 flex flex-col items-center justify-between" key={technology.name}>
            <div className="w-20 h-20 flex items-center justify-center">
              <BallCanvas icon={technology.icon} />
            </div>
            <i className="text-sm mt-2 text-center">
    {technology.name.split('\n').map((line, index, array) => (
      <React.Fragment key={index}>
        {line}
        {index !== array.length - 1 && <br />}
      </React.Fragment>
    ))}
  </i>          </div>
        </>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
