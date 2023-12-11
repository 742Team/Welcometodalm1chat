import React from "react";
import Windows from "../assets/windows-10.svg";
import Dalm1ChatInstaller from "../assets/Dalm1ChatInstaller.exe";

const Download = () => {
  const handleDownload = () => {
    const exeURL = Dalm1ChatInstaller;
    const link = document.createElement("a");
    link.href = exeURL;
    link.setAttribute("download", "Dalm1ChatInstaller.exe"); // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="downloadpagemain">
      <a className="dlforwindows" href="#dl" onClick={handleDownload} download>
        <img className="windowspic" src={Windows} alt="Download Windows" />
        <p>Windows</p>
      </a>
    </div>
  );
};

export default Download;
