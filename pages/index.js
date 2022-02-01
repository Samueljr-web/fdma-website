import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Teachers } from "../data/main";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    });
  }, []);

  return (
    <div className="">
      <main className="">
        <div
          className="w-full h-[35rem] z-10 relative bg-fixed bg-cover"
          style={{
            backgroundImage: 'url("./assets/slide1.jpg")',
            width: "-webkit-fill-available",
          }}
        >
          <div
            className="pt-[15rem] h-full bg-[rgba(0,0,0,0.7)] "
            data-aos="fade-up"
          >
            <h2 className="text-center font-bold text-slate-50 text-5xl">
              Favoured Destinies
              <br />
              <small className="font-mono text-xl">
                Towards destiny fufillment
              </small>
            </h2>
          </div>
        </div>

        <div className="py-[5rem]">
          <section>
            <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto bg-[#EFEFEF]">
              <div className="flex flex-col justify-center lg:w-[25rem] w-full h-[25rem] bg-white my-20 mx-auto">
                <h1 className="font-bold text-xl text-center">Anthem</h1>
                <p className="text-center">
                  Favoured, Favoured, Favoured kids are very smart
                  <br />
                  I cannot leave my Favoured School and to go to another (x2)
                  <br />
                  If you want to know just come and see.
                </p>
                <h1 className="font-bold text-xl mt-10 text-center">Pledge</h1>
                <p className="text-center">
                  I ask for wisdom and grace to live a favourable life.
                </p>
              </div>
              <div className="flex flex-col items-center lg:w-[25rem] w-full h-[25rem] bg-white my-20 mx-auto">
                <h1 className="font-bold text-xl text-center my-10">Schools</h1>
                <h2 className="font-medium">We offer the following</h2>
                <h3>Creche</h3>
                <h3>Pre-Nursery</h3>
                <h3>Nursery</h3>
                <h3>Basic</h3>
                <h3>Secondary</h3>
              </div>
            </div>
          </section>
        </div>
        <div className="pt-[5rem]">
          <section>
            <h2 className="text-center font-medium text-[2.5rem] py-12">
              SCHOOL ADMINISTRATIVES
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              {Teachers.map((teacher) => {
                return (
                  <div
                    key={teacher.id}
                    data-aos="fade-up"
                    className="mx-auto mb-10 w-60 p-5 max-h-[20rem] shadow-md rounded-md"
                  >
                    <img
                      src={teacher.image}
                      alt="teacher"
                      className="h-50 border-2 border-red-500 rounded-md"
                    />
                    <h2 className="text-center">{teacher.name}</h2>
                    <h2 className="text-center uppercase">{teacher.post}</h2>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
