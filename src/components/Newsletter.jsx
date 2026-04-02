import Reveal from './Reveal'

export default function Newsletter() {
  return (
    <section className="w-full bg-[#dbe9d8] overflow-hidden">
      <Reveal>
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 text-center sm:px-6 lg:px-12">
          <div className="absolute right-2 top-16 h-24 w-16 rounded-r-[100px] bg-violet-600 sm:right-12 sm:h-36 sm:w-24 floating-shape" />
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.06em]">
            Subscribe to
            <br />
            our newsletter
          </h2>
          <p className="mt-5 text-[15px] text-neutral-700 sm:text-base">
            To make your stay special and even more memorable
          </p>
          <button
            type="button"
            className="mt-7 rounded-full bg-black px-7 py-3.5 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_18px_35px_rgba(0,0,0,0.2)] active:scale-95"
          >
            Subscribe Now
          </button>
        </div>
      </Reveal>
    </section>
  )
}
