import Link from "next/link";

export default function Page() {
  return (
    <div className="mb-30">
      <div className="text-center mt-10 mb-20">
        <h1 className="text-4xl font-extrabold ">Recent Work</h1>
        <p className="w-[570px] text-[#9c9c9c] text-lg m-auto mt-5">
          " Below, you can find the projects I’ve worked on. They mainly
          showcase my ability to work with front-end tools. Most of the projects
          are not yet fully responsive, so they’re best viewed on desktop for
          now — but responsive updates are coming soon. All of these projects
          have been deployed through GitHub "
        </p>
      </div>
      <div className="  w-[1100px]  mt-10 grid grid-cols-2  gap-10 m-auto justify-items-center ">
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link href={"https://amiriiidev.github.io/Cloud-Error-404-page/"}>
            <div className="bg-[url(/myprtfolio/proimg/404error.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A 404 error page created entirely using HTML and CSS.
          </p>
        </div>
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link href={"https://amiriiidev.github.io/login_page-html-css/"}>
            <div className="bg-[url(/myprtfolio/proimg/login.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A login page designed entirely using HTML and CSS.
          </p>
        </div>
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link href={"https://amiriiidev.github.io/to-do-app/"}>
            <div className="bg-[url(/myprtfolio/proimg/todoapp.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A simple To-Do app where you can add tasks you want to do, and once
            completed, they move to the "Done" section. This app is designed for
            mobile display, so for a better view, try inspecting it in mobile
            mode in your browser.
          </p>
        </div>
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link
            href={
              "https://amiriiidev.github.io/moviesite-design-with-tailwind/"
            }
          >
            <div className="bg-[url(/myprtfolio/proimg/moviesite.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A website built with Tailwind, created solely to demonstrate
            proficiency with Tailwind tools. It does not include interactive
            features or advanced UI functionality.
          </p>
        </div>
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link href={"https://amiriiidev.github.io/little-store-site/"}>
            <div className="bg-[url(/myprtfolio/proimg/digitize.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A small e-commerce store using fake data, built with various React
            tools, Redux Toolkit, and async thunks for data handling. All
            filters are fully functional, including sidebar filters, which can
            be used to display products.
          </p>
        </div>
        <div className="  overflow-auto scrollbar-hidden  w-[445px] h-[400px] ">
          <Link href={"https://amiriiidev.github.io/weather-app-pwa/"}>
            <div className="bg-[url(/myprtfolio/proimg/weatherapp.png)] w-[445px] h-[300px] bg-center bg-cover"></div>
          </Link>
          <p className="text-[#808080] text-lg font-mono">
            A weather app where you simply enter the desired city name and wait
            for the results. It also has PWA capabilities, allowing installation
            and adding to the home screen.
          </p>
        </div>
      </div>
    </div>
  );
}
