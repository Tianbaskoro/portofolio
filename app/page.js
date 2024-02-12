import Image from "next/image";
import Design from "./components/Design";
import Type from "./components/Type";
import img from "./src/img/ppp.png"

export default function Home() {
  return (
    <main className="flex justify-center p-20">
       <Design></Design>
      <div className="text-center">
        <Type></Type>
        <div className="pb-20">
        </div>
        <div className="card w-96 shadow-xl">
          <figure className="px-24">
            <Image
              src={img}
              alt="I'm Tian Baskoro"
              className="rounded-full shadow-xl brightness-90"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Tian Baskoro</h2>
            <p>Seorang Programmer, Developer, dan Designer</p>
            <div className="card-actions">
              <button className="btn size-16">Ln</button>
              <button className="btn size-16">Ig</button>
              <button className="btn size-16">Gh</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
