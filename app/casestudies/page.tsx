import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="mt-15 mb-20 ">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold ">case studies</h1>
        <p className="w-[570px] text-[#9c9c9c] text-lg m-auto mt-5">
          "I am a self-taught front-end developer with strong proficiency in
          HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Redux, and PWA. I
          have gained these skills through reputable courses and official
          documentation, achieving a solid level of expertise. More details are
          provided below."
        </p>
      </div>
      <div className="flex w-[70%] justify-center items-center space-x-40 m-auto mt-10">
        <Image
          width={445}
          height={300}
          src={"/htmlcss.jpg"}
          alt=" html course"
        />
        <div>
          <h1 className="text-3xl font-bold ">Html & Css </h1>
          <p className="w-[445px] text-lg text-[#9c9c9c] mt-5">
            "I’ve taken several courses in HTML and CSS and worked on different
            projects that helped me reach a solid level of skill. By following
            official documentation, I built a strong understanding of these
            technologies. You can check out some of my projects in the 'Works'
            section above."
          </p>
        </div>
      </div>
      <div className="flex w-[70%] justify-center items-center space-x-10 m-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold ">JavaScript </h1>
          <p className="w-[445px] text-lg text-[#9c9c9c] mt-5">
            "I’ve completed both Persian and English courses on Udemy for
            JavaScript, with over 100 hours of theory-based learning. Along the
            way, I also practiced with many hands-on projects, which helped me
            strengthen my skills and understanding of JavaScript."
          </p>
        </div>
        <Image width={445} height={300} src={"/js.png"} alt=" html course" />
      </div>{" "}
      <div className="flex w-[70%] justify-center items-center space-x-40 m-auto mt-10">
        <Image
          width={445}
          height={300}
          src={"/reactjs.png"}
          alt=" html course"
        />
        <div>
          <h1 className="text-3xl font-bold ">ReactJs </h1>
          <p className="w-[445px] text-lg text-[#9c9c9c] mt-5">
            "In React, I’m not only confident with the core concepts but also
            skilled in Redux Toolkit, Entity Adapter, and RTK Query, which help
            me build more scalable and efficient applications."
          </p>
        </div>
      </div>{" "}
      <div className="flex w-[70%] justify-center items-center space-x-10 m-auto mt-10">
        <div>
          <h1 className="text-3xl font-bold ">NextJs </h1>
          <p className="w-[445px] text-lg text-[#9c9c9c] mt-5">
            "I’ve studied Next.js through both Persian courses and the official
            Next.js learning resources. Along the way, I even reported an issue
            I found in the Next.js documentation, which you can also see on my
            GitHub profile."
          </p>
        </div>
        <Image
          width={445}
          height={300}
          src={"/nextjs.png"}
          alt=" html course"
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-extrabold ">other Skills</h1>
        <div className="flex justify-center space-x-40">
          <Image
            width={445}
            height={300}
            src={"/tailwind.jpeg"}
            alt=" html course"
          />
          <p className="w-[450] text-[#9c9c9c] text-lg m-auto mt-5">
            "You can check out my projects in the 'Works' tab to get a clearer
            view of my skills and experience. Keep in mind that my abilities go
            far beyond the projects shown here. Since I haven’t always had
            enough time or specific ideas from clients, most of these projects
            are personal and practice-based. Still, they demonstrate my ability
            to effectively use the tools and technologies I’ve learned."
          </p>
          <Image
            width={445}
            height={300}
            src={"/reduxtoolkit.jpg"}
            alt=" html course"
          />
        </div>

        <Link
          className=" bg-[#07bcdc] text-white text-2xl font-sans font-semibold rounded-xl p-4 inline-block mt-4 "
          href={"/recentworks"}
        >
          see my projects
        </Link>
      </div>
    </div>
  );
}
