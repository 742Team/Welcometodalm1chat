//
//
//
//  Created by Dimitri ALMON (DALM1) on 16/11/2023.
//  Copyright DALM AGENCY © - 2023
//

import React from "react";
import Windows from "../assets/windows-10.svg";
import Mac from "../assets/mac-os.gif";
import Dalm1ChatInstaller from "../assets/Dalm1ChatInstaller.exe";

const Download = () => {
  const handleDownload = () => {
    const exeURL = Dalm1ChatInstaller;
    const link = document.createElement("a");
    link.href = exeURL;
    link.setAttribute("download", "Dalm1ChatInstaller.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="downloadpagemain">
      <a className="dlforwindows" href="#dl" onClick={handleDownload} download>
        <img className="windowspic" src={Windows} alt="Download for Windows" />
        <p>Windows</p>
      </a>
      <a className="dlforMac" href="#dl" onClick={handleDownload} download>
        <img className="windowspic" src={Mac} alt="Download for Mac" />
        <p>MacOS</p>
      </a>
    </div>
  );
};

export default Download;
