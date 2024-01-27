import React from "react";
import aboutus from "../assets/aboutus.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpeg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpg";
import about7 from "../assets/about7.jpg";
const Advertise = () => {
  return (
    <>
      <div className="ml-48 mt-14">
        <h1 className="text-5xl font-bold">Better Business Results </h1>
        <h1 className="text-5xl font-bold mt-2"> Through Real Estate.</h1>
      </div>
      <div className="h-auto bg-black mt-5">
        <div className="flex mt-12 mb-12">
          <div className="mt-12 w-2/5 mb-12">
            <img
              src={aboutus}
              alt="about us"
              className="w-96 h-64 rounded ml-auto"
            />
          </div>
          <div className="mt-12 ml-12 mr-auto  w-3/5 mb-24">
            <h1 className="text-white text-2xl"> Our mission </h1>
            <h1 className="text-white text-4xl mt-5 tracking-wide">
              {" "}
              Help Small & Mid-Sized{" "}
            </h1>
            <h1 className="text-white text-4xl mt-2 tracking-wide">
              {" "}
              Businesses Grow Beyond{" "}
            </h1>
            <h1 className="text-white text-4xl mt-2 tracking-wide">
              {" "}
              What They Thought Possible{" "}
            </h1>
            <h1 className="text-white text-xl mt-5 tracking-wide">
              {" "}
              The backbone of the US economy, small and mid-sized businesses{" "}
              <br /> deserve every opportunity to grow and continue their
              immeasurable <br /> contributions to our society. Yet most
              marketing agencies focus on <br /> serving only large corporations
              that can afford their services.
            </h1>
            <h1 className="text-white text-xl mt-5 tracking-wide">
              {" "}
              The end result? Big corporations continue to grow and maximize{" "}
              <br />
              profits while smaller businesses struggle to retain and grow{" "}
              <br /> their market share. We’re not like that.
            </h1>
            <h1 className="text-white text-xl mt-5 tracking-wide">
              {" "}
              Our passion and expertise lies in providing world-class marketing{" "}
              <br /> solutions specially designed for smaller organizations.
              That’s <br /> what gets us up every morning — knowing that our
              solutions <br /> positively impact the lives of thousands.
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex mt-12 mb-12">
          <div className="mt-12 ml-64  w-2/5 mb-24">
            <h1 className="text-3xl font-bold"> We’re Your Internal </h1>

            <h1 className="mt-2 text-3xl font-bold"> Marketing Team </h1>
            <h1 className="mt-3 text-xl">
              Our small business clients, unlike larger <br /> corporations,
              lack the resources to hire and <br /> retain a full-scale internal
              marketing <br /> department. That’s where we come in.{" "}
            </h1>
            <h1 className="mt-3 text-xl">
              Our solutions are designed to provide you with <br /> a  <strong>dedicated,
              result-driven </strong> marketing team <br /> at a  fraction of the cost of
              hiring internally. <br /> With us,  you get a team of <strong>SEO, content,</strong> <br />
              business, web design &  development, and <strong>PPC </strong> experts in
              addition to a <strong>dedicated account </strong><br /> manager, all focused on one
              thing: <br /> Growing YOUR business.
            </h1>
          </div>
          <div className="mt-12 w-3/5 mr-36 mb-12">
            <img
              src={about1}
              alt="about us"
              className="w-128 h-96 rounded ml-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-auto mt-12">
        <div className="mt-12 text-center">
            <h1 className="mt-5 font-bold text-xl">Meet Your Dream Team!</h1>
            <h3 className="mt-2">When you hire Comrade you reap the benefit of decades of combined experience in </h3>
            <h3>a range of pertinent practice areas. Each of your team members has deep expertise</h3>
            <h3>in their respective fields: business, marketing, and creative. We comprise a wide</h3>
            <h3>variety of lifestyles and cultural backgrounds, enabling us to bring unique </h3>
            <h3>perspectives to each new project.</h3>
        </div>
        <div className="mt-12">
          <div className="flex space-x-16 p-4 justify-center">
          <div className="card h-96 w-72 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out" >
                  <div className="flex items-center mt-5">
                  <img
              src={about2}
              alt="about us"
              className="w-24 h-24 rounded-full  mx-auto"
            />
                 </div>
          </div>
          <div className="card h-96 w-72 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out" >
          <div className="flex items-center mt-5">
                  <img
              src={about3}
              alt="about us"
              className="w-24 h-24 rounded-full  mx-auto"
            />
                 </div>
          </div>
          <div className="card h-96 w-72 shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out" >
          <div className="flex items-center mt-5">
                  <img
              src={about4}
              alt="about us"
              className="w-24 h-24 rounded-full  mx-auto"
            />
                 </div>
          </div>
          </div>
        </div>

      </div>

      <div className="mt-24 bg-blue-500">
        <div className="flex mt-24 ">
          <div className="mt-24 ml-64  w-2/5 mb-24 text-white">
            <h1 className="text-3xl font-bold"> Join our team. Make </h1>

            <h1 className="mt-2 text-3xl font-bold"> an impact </h1>
            <h1 className="mt-3 tracking-wide">
              Our small business clients, unlike larger <br /> corporations,
              lack the resources to hire and <br /> retain a full-scale internal
              marketing <br /> department. That’s where we come in.{" "}
            </h1>

            <button class="ml-5 bg-yellow-400 px-5 py-1 border-none box-border box-shadow-md inset-box-shadow text-gray-700 hover:text-gray-800 focus:outline-none focus:border-none focus:ring focus:ring-yellow-300 tracking-wide" style={{marginTop : "80px"}}>
            Services Available
         </button>



           
          </div>
          <div className="mt-24 w-3/5 mr-36 mb-12">
            <img
              src={about5}
              alt="about us"
              className="w-128 h-96 rounded ml-auto"
            />
          </div>
        </div>
      </div>
      <div className=" mb-12">
            <img
              src={about6}
              alt="about us"
              className="w-full"
              style={{ height: '500px' }}
            />
          </div>
      
    </>
  );
};

export default Advertise;
