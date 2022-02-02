import React from "react";

function Resultchecker() {
  return (
    <div className="pt-[5rem]">
      <h2 className="text-center mt-5 font-medium text-xl">
        Check your result
      </h2>
      <iframe
        src="https://favoureddestinies.org.ng/students/login.php"
        className="h-screen w-screen"
      ></iframe>
    </div>
  );
}

export default Resultchecker;
