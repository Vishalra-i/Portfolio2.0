import Link from "next/link";

export function Hero({ headingClass }: { headingClass: string }) {
  return (
    <section className="py-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1
            className={`${headingClass} text-5xl leading-[1.1] text-white sm:text-6xl lg:text-[4.25rem]`}
          >
            We Build Websites
            <br />
            That Turn Visitors
            <br />
            Into Customers
          </h1>
          <p className="mt-7 max-w-xl text-lg text-[#bdbdbd]">
            Modern websites for salons, restaurants, gyms, tile showrooms, and local
            businesses.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/portfolio"
              className="rounded-lg border border-[#d0d0d0] bg-white/5 px-8 py-3.5 text-center text-base font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.03] hover:border-white"
            >
              View Our Work
            </Link>
            <Link
              href="/get-quote"
              className="rounded-lg bg-[#d4af37] px-8 py-3.5 text-center text-base font-semibold text-black shadow-xl transition duration-300 hover:scale-[1.03] hover:bg-[#c79b2c]"
            >
              Get Free Website Demo
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/25 via-transparent to-transparent blur-3xl" />
          <div className="relative">
            <div className="rounded-2xl border border-white/20 bg-[#111111] p-3 shadow-2xl">
              <div className="rounded-xl border border-white/10 bg-black p-2">
                <div className="h-[260px] rounded-lg bg-[linear-gradient(135deg,#2c1f12_0%,#7a5833_40%,#2a1f16_100%)] p-6 text-white sm:h-[320px]">
                  <div className="mb-4 h-2 w-20 rounded-full bg-white/30" />
                  <div className="mt-12 max-w-[60%] text-2xl font-semibold">Restaurant Website</div>
                  <div className="mt-4 h-8 w-40 rounded-md bg-white/80" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 left-1/2 h-4 w-[80%] -translate-x-1/2 rounded-full bg-white/40 blur-md" />

            <div className="absolute -bottom-3 right-8 w-[34%] rounded-2xl border border-white/20 bg-[#151515]/95 p-2 shadow-2xl">
              <div className="h-[190px] rounded-xl bg-[linear-gradient(160deg,#9a6b38_0%,#2f2114_100%)] p-2">
                <div className="grid grid-cols-2 gap-2 pt-8">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="h-9 rounded bg-white/60" />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 right-0 w-[20%] rounded-[1.6rem] border border-white/20 bg-[#161616]/95 p-1.5 shadow-2xl">
              <div className="h-[180px] rounded-[1.2rem] bg-[linear-gradient(165deg,#8f6435_0%,#2a1f15_100%)] p-2">
                <div className="space-y-2 pt-8">
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className="h-5 rounded bg-white/65" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
