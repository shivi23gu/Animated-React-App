import Reveal from './Reveal'

export default function SplitSection({
  title,
  description,
  image,
  imageAlt,
  reverse = false,
  shape = 'corner',
}) {
  return (
    <section className={`grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-14 ${reverse ? 'lg:[&>*:first-child]:order-1' : ''}`}>
      <Reveal className={`${reverse ? 'lg:order-2' : ''}`}>
        <div className="max-w-[520px]">
          <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.06em]">
            {title}
          </h2>
          <p className="mt-6 text-[15px] leading-7 text-neutral-700 sm:text-base">
            {description}
          </p>
          <a
            href="#"
            className="mt-5 inline-flex border-b border-black pb-1 text-sm transition-all duration-300 hover:translate-x-1.5 hover:opacity-70"
          >
            Read more
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} className={`${reverse ? 'lg:order-1' : ''}`}>
        <div className={`relative ${reverse ? 'lg:mr-auto' : 'lg:ml-auto'} w-full max-w-[520px]`}>
          {shape === 'corner' && (
            <div className="absolute -right-3 top-5 h-28 w-28 rotate-[-14deg] bg-rose-400 soft-pulse" />
          )}

          {shape === 'triangles' && (
            <>
              <div className="triangle-up absolute left-0 top-14" />
              <div className="triangle-up absolute bottom-[-24px] left-36 rotate-12" />
            </>
          )}

          <img
            src={image}
            alt={imageAlt}
            className="aspect-square w-full rounded-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      </Reveal>
    </section>
  )
}
