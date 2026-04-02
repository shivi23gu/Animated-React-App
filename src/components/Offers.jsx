import Reveal from './Reveal'

export default function Offers({ rows }) {
  return (
    <section className="py-24">
      <Reveal>
        <h2 className="text-[clamp(2.6rem,5vw,4.5rem)] font-normal leading-[0.94] tracking-[-0.06em]">
          What we <span className="pill-highlight pill-green">can</span>
          <br />
          offer you!
        </h2>
      </Reveal>

      <div className="mt-12 border-t border-black/15">
        {rows.map(([small, big], index) => (
          <Reveal key={big} delay={index * 80}>
            <div className="group grid gap-3 border-b border-black/15 py-6 transition-all duration-300 hover:bg-lime-50/70 hover:px-3 md:grid-cols-[230px_1fr_40px] md:items-center">
              <p className="text-sm leading-5 text-neutral-700">{small}</p>
              <h3 className="text-[clamp(1.8rem,4vw,3rem)] font-normal tracking-[-0.05em]">{big}</h3>
              <span className="justify-self-end text-3xl transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
