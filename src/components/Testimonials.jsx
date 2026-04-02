import Reveal from './Reveal'

const customerAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80',
]

const minis = [
  'left-[2%] top-[120px] h-14 w-14',
  'left-[9%] top-[216px] h-24 w-24 sm:h-28 sm:w-28',
  'left-0 bottom-[70px] h-14 w-14',
  'right-[18%] top-[124px] h-14 w-14',
  'right-[10%] top-[90px] h-14 w-14',
  'right-[15%] top-[220px] h-16 w-16',
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <Reveal>
        <div className="text-center">
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.06em]">
            <span className="pill-highlight pill-green">What</span> our customer
            <br />
            says <span className="underline decoration-black/80 underline-offset-4">About Us</span>
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-10 min-h-[520px]">
        {customerAvatars.slice(0, 6).map((avatar, index) => (
          <Reveal key={avatar} delay={index * 70}>
            <img
              src={avatar}
              alt="customer"
              className={`absolute hidden rounded-full object-cover shadow-[0_14px_35px_rgba(0,0,0,0.08)] md:block ${minis[index]} floating-avatar`}
            />
          </Reveal>
        ))}

        <Reveal delay={240}>
          <img
            src={customerAvatars[6]}
            alt="main customer"
            className="floating-avatar absolute bottom-5 right-0 hidden h-24 w-24 rounded-full object-cover shadow-[0_16px_36px_rgba(0,0,0,0.1)] md:block lg:h-36 lg:w-36"
          />
        </Reveal>

        <Reveal delay={160}>
          <div className="mx-auto mt-28 w-full max-w-[700px] rounded-[32px] bg-[#edf1ea] px-6 py-10 text-center shadow-[0_18px_45px_rgba(0,0,0,0.04)] transition-transform duration-500 hover:-translate-y-1.5 sm:px-10 md:px-14">
            <span className="absolute ml-[-10px] mt-[-18px] text-7xl leading-none text-[#cfd4c9] sm:text-[88px]">“</span>
            <p className="relative text-base leading-8 text-neutral-700 sm:text-lg">
              Elementum delivered the site within the timeline as requested. In the end,
              the client found a 50% increase in traffic within days since launch. They also
              had an impressive ability to use technologies the company had not used before,
              which proved easy to manage and highly reliable.
            </p>
            <span className="absolute right-6 mt-[-10px] text-7xl leading-none text-[#cfd4c9] sm:text-[88px]">”</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
