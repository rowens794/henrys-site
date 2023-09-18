import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry&apos;s Minifigs</title>
        <meta
          name="description"
          content="A Next.js starter styled with Tailwind CSS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by saying hi to
            <code className="font-mono font-bold pl-2">Henry</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <Image
            src="/henry.png"
            alt="Henry's Minifigs"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <h1 className="text-6xl font-bold text-center mb-8">
          Welcome to{" "}
          <a
            className="text-blue-600 dark:text-blue-400 hover:underline"
            href="https://nextjs.org"
          >
            Henry&apos;s Website for Selling and Such
          </a>
        </h1>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://en.wikipedia.org/wiki/Lego_minifigure"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Mini-figs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about cool mini-figs!
            </p>
          </a>

          <a
            href="https://www.amazon.com/LEGO-Mandalorians-Starfighter-Microfighter-Minifigures/dp/B0BSRFZHPQ/ref=sr_1_2_sspa?crid=ZEBHZI774TLQ&keywords=minifig&qid=1694994892&sprefix=minifig%2Caps%2C182&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Mando-fig
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Buy a cool Mando mini-fig + Ship for $15.97! YAYYY!
            </p>
          </a>

          <a
            href="https://www.amazon.com/Battle-Droid-LEGO-Star-Figure/dp/B001AQVU7A/ref=sr_1_9?crid=14F55ZJ8SKD57&keywords=lego+battle+droids&qid=1694995041&sprefix=lego+battle+droids%2Caps%2C162&sr=8-9"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Droid-fig
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Buy a cool Droid fig for $7.45! Yay!!!!
            </p>
          </a>

          <a
            href="https://www.amazon.com/LEGO-Star-Wars-Minifigure-Princess/dp/B09JXQZ5JK/ref=sr_1_2?crid=3QLXOKJ3U5VGW&keywords=princess+leia+fig+lego&qid=1694995156&sprefix=princess+leia+fig+lego%2Caps%2C157&sr=8-2"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Leia-fig
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Buy an amazing Leia Fig for $15.99! Woot!!!!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
