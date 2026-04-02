import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SplitSection from './components/SplitSection'
import Offers from './components/Offers'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

const offerRows = [
  ['Office of multiple interest content', 'Collaborative & partnership'],
  ['The hanger US Air force digital experimental', 'We talk about our weight'],
  ['Delta faucet content, social, digital', 'Piloting digital confidence'],
]

export default function App() {
  return (
    <div className="bg-stone-50 text-neutral-950 selection:bg-lime-200/70">
      <div className="relative overflow-hidden mx-auto max-w-[1440px] px-4 pb-10 pt-5 sm:px-6 lg:px-12">
        <div className="squiggle squiggle-left" />
        <div className="squiggle squiggle-middle" />
        <div className="squiggle squiggle-lower" />

        <Navbar />
        <Hero />

        <SplitSection
          title={<>Tomorrow should<br />be better than <span className="pill-highlight pill-green">today</span></>}
          description="We are a team of strategists, designers, communicators, and researchers. Together, we believe that progress only happens when you refuse to play things safe."
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Business meeting"
          imageRight
          shape="corner"
        />

        <SplitSection
          reverse
          title={<><span className="pill-highlight pill-green">See</span> how we can<br />help you process</>}
          description="We add a layer of fearless insight and action that allows change makers to accelerate their progress in areas such as brand, design, digital, comms and social research."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Creative team working"
          shape="triangles"
        />

        <Offers rows={offerRows} />
        <Testimonials />
      </div>

      <Newsletter />
      <Footer />
    </div>
  )
}
