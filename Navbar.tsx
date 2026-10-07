import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b09]/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight">
          <span className="text-[#00BF63]">Ad</span> Spark
        </Link>
        <nav className="hidden gap-6 text-sm text-white/75 md:flex">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/verified-bm">Verified BM</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="btn-primary text-sm">Get Started</Link>
      </div>
    </header>
  );
}