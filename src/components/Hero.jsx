import Reveal from './Reveal'

const heroPeople = [
  {
    name: 'Guitar artist',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    classes: 'h-20 w-20 sm:h-24 sm:w-24 left-[2%] bottom-7',
  },
  {
    name: 'Striped shirt',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    classes: 'h-18 w-18 sm:h-20 sm:w-20 left-[12%] bottom-10',
  },
  {
    name: 'Traveler',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80',
    classes: 'h-24 w-24 sm:h-28 sm:w-28 left-[28%] top-3',
  },
  {
    name: 'Smiling man',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80',
    classes: 'h-22 w-22 sm:h-24 sm:w-24 left-[41%] bottom-4',
  },
  {
    name: 'Formal portrait',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    classes: 'h-24 w-24 sm:h-28 sm:w-28 left-[53%] top-2',
  },
  {
    name: 'Coffee cap',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80',
    classes: 'h-22 w-22 sm:h-24 sm:w-24 left-[65%] bottom-8',
  },
  {
    name: 'Bearded man',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    classes: 'h-24 w-24 sm:h-28 sm:w-28 right-[12%] top-3',
  },
  {
    name: 'Street style',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    classes: 'h-20 w-20 sm:h-24 sm:w-24 right-0 bottom-7',
  },
]

function Pill({ children, tone = 'green' }) {
  return <span className={`pill-highlight ${tone === 'yellow' ? 'pill-yellow' : 'pill-green'}`}>{children}</span>
}

export default function Hero() {
  return (
    <section className="relative pt-10 md:pt-14 lg:pt-16 text-center overflow-hidden">
  <div className="absolute right-4 top-28 hidden md:block h-28 w-20 lg:h-36 lg:w-24 rounded-r-full bg-violet-600" />

  <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
    <h1 className="mx-auto max-w-[980px] text-[54px] leading-[0.95] tracking-[-0.06em] sm:text-[72px] md:text-[96px] lg:text-[118px] font-normal">
      The{" "}
      <span className="inline-block rounded-full bg-[#f2c458] px-4 pb-1">
        thinkers
      </span>{" "}
      and
      <br />
      doers were changing
      <br />
      the{" "}
      <span className="inline-block rounded-full bg-[#dcefd2] px-5 pb-1">
        status
      </span>{" "}
      Quo with
    </h1>

    <p className="mx-auto mt-6 max-w-[620px] text-sm leading-7 text-neutral-700 sm:text-base">
      We are a team of strategists, designers, communicators, researchers.
      Together, we believe that progress only happens when you refuse to play
      things safe.
    </p>

    <div className="mt-14 md:mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-10 lg:gap-x-14">
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover shadow-md animate-float"
      />
      <img
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover shadow-md animate-float delay-100"
      />
      <img
        src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover shadow-md animate-float delay-200"
      />
      <img
        src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover shadow-md animate-float delay-300"
      />
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover shadow-md animate-float delay-500"
      />
      <img
        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80"
        alt="person"
        className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover shadow-md animate-float delay-700"
      />
    </div>
  </div>
</section>
  )
}
