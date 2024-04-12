import TypeWriter from "./components/typewriter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-screen p-24">
      <div className="relative flex place-items-center">
        <div className="text-7xl mt-8 font-bold font-sans block">
          <TypeWriter />
        </div>
      </div>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col-reverse">
        <p className="mt-8 flex w-full justify-center">
          <Link href="/login" className="btn bg-blue-700 rounded-xl">
            Start
            <code className="font-mono font-bold">building</code>
            by creating your account
            <code className="font-mono font-bold">now</code>
          </Link>
        </p>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="font-bold pointer-events-none flex place-items-center gap-2 p-8 lg:p-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            World's first AI software company
          </a>
        </div>
      </div>

      <div className="mb-32 mt-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Outreach Team{" "}
            <span className="inline-block transition-transform motion-reduce:transform-none">
              🗹
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Empowering outreach through meticulous management and automation.
          </p>
        </a>

        <a
          className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Social Media Team{" "}
            <span className="inline-block transition-transform motion-reduce:transform-none">
              🗹
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Crafting connections, content, and insights across social platforms.
          </p>
        </a>

        <a
          className="group  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-xl font-semibold`}>
            Development Team{" "}
            <span className="inline-block transition-transform motion-reduce:transform-none">
              🗹
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Innovating solutions from planning to coding, driven by AI.
          </p>
        </a>
      </div>
    </main>
  );
}
