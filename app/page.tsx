import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] bg-black ">
      <div className="flex justify-evenly  space-x-9 items-center w-[70%] h-[70%] m-auto">
        <div className="w-[538px] h-[247px] flex-col space-y-10">
          <h1 className="text-5xl font-roboto text-white">
            AmirHosein Valipour
          </h1>
          <p className="text-[#9c9c9c] text-start text-2xl">
            Hello! I’m a Front-End Developer. I’m glad you’re visiting my
            portfolio page. To get familiar with my skills, click on the
            “casestudies” tab, and to see my projects, click on the
            “recentworks” tab above.if you interested in my cv you can see more
            about me 😊 pls click here!!!
          </p>
          <Link
            className="bg-[#3f8e00] text-white  text-lg font-bold font-mono p-5 rounded-sm"
            href={"/casestudies"}
          >
            {" "}
            Let's Get Start ...
          </Link>
        </div>
        <Image
          className="rounded-full border-4 border-double  "
          width={350}
          height={350}
          src={"/IMG_20240426_194357_686.jpg"}
          alt="image"
        />
      </div>

      <div className="m-auto border-2  w-[1100px] h-[60px]">
        <p className="text-white text-xl italic font-roboto font-stretch-extra-condensed">
          work with:
        </p>
        <ul className="flex space-x-20 mt-5">
          <li>
            {" "}
            <Image width={96} height={96} src={"/icons8-html-96.png"} alt="" />
          </li>
          <li>
            {" "}
            <Image width={96} height={96} src={"/icons8-css-96.png"} alt="" />
          </li>
          <li>
            {" "}
            <Image
              width={96}
              height={96}
              src={"/icons8-javascript-96.png"}
              alt=""
            />
          </li>
          <li>
            {" "}
            <Image width={96} height={96} src={"/icons8-react-96.png"} alt="" />
          </li>
          <li>
            {" "}
            <Image
              width={96}
              height={96}
              src={"/icons8-tailwind-css-96.png"}
              alt=""
            />
          </li>
          <li>
            {" "}
            <Image
              width={96}
              height={96}
              src={"/icons8-nextjs-96.png"}
              alt=""
            />
          </li>
          <li>
            {" "}
            <Image width={96} height={96} src={"/icons8-redux-96.png"} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}
