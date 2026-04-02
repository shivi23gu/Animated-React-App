import Reveal from './Reveal'

const footerColumns = [
  {
    title: 'Company',
    items: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    title: 'Terms & Policies',
    items: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    title: 'Follow Us',
    items: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#dbe9d8] border-t border-black/15">
      <Reveal>
        <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-12">
          {footerColumns.map((column, index) => (
            <div key={column.title} className="space-y-3" style={{ transitionDelay: `${index * 70}ms` }}>
              <h4 className="text-base font-medium">{column.title}</h4>
              <div className="space-y-2.5 text-sm text-neutral-700">
                {column.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block transition-all duration-300 hover:translate-x-1 hover:opacity-75"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-3">
            <h4 className="text-base font-medium">Contact</h4>
            <div className="space-y-2.5 text-sm leading-6 text-neutral-700">
              <p>
                1498W Fulton st, STE
                <br />
                2D Chicago, IL 60637
              </p>
              <p>(123) 456 78900</p>
              <p>info@elementum.com</p>
            </div>
          </div>
        </div>
      </Reveal>

      <p className="border-t border-black/10 px-4 py-5 text-center text-sm text-neutral-700">
        ©2023 Elementum. All rights reserved
      </p>
    </footer>
  )
}
