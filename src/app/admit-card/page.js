import React from "react";
import Header from "../../../components/header/header";

function page() {
  return (
    <div>
      <Header />
      {/* <div className="max-h-[100%]">
        <div>hi</div>
      </div> */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          &copy; 2024 SarkariResultHUB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default page;
