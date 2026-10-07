import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

const services = [
  ["Meta Business Manager","Business Manager setup and related solutions.","meta-business-manager"],
  ["Facebook & Instagram Ads","Conversion-focused Meta advertising and campaign management.","facebook-instagram-ads"],
  ["Google Ads","Search, display and YouTube campaign strategy and optimization.","google-ads"],
  ["Social Media Marketing","Content and audience strategy designed for business growth.","social-media-marketing"]
];

export default function Home() {
  return <main>
    <section className="container-x py-24 md:py-32">
      <div className="max-w-4xl">
        <div className="mb-5 inline-flex rounded-full border border-[#00BF63]/30 bg-[#00BF63]/10 px-4 py-2 text-sm text-[#00BF63]">Digital Marketing • Ads • Growth</div>
        <h1 className="text-5xl font-black leading-tight md:text-7xl">Digital Marketing That <span className="text-[#00BF63]">Drives Growth.</span></h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">Helping businesses grow through Meta Ads, Google Ads, Business Manager solutions and conversion-focused digital marketing.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">Get Started</Link>
          <Link href="/portfolio" className="btn-secondary">View Portfolio</Link>
        </div>
      </div>
    </section>

    <section className="container-x py-10">
      <div className="mb-8 flex items-end justify-between">
        <div><p className="text-sm font-semibold text-[#00BF63]">WHAT I DO</p><h2 className="mt-2 text-3xl font-bold">Services</h2></div>
        <Link href="/services" className="text-sm text-white/60">View all →</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{services.map(([t,d,s])=><ServiceCard key={s} title={t} description={d} slug={s}/>)}</div>
    </section>

    <section className="container-x py-20">
      <div className="glass rounded-3xl p-8 md:p-12">
        <p className="text-sm font-semibold text-[#00BF63]">READY TO GROW?</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let&apos;s turn your advertising into measurable business growth.</h2>
        <Link href="/contact" className="btn-primary mt-7">Contact Me</Link>
      </div>
    </section>
  </main>
}
