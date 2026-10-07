import Link from "next/link";
export default function ServiceCard({title, description, slug}:{title:string;description:string;slug:string}) {
  return <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#00BF63]/40">
    <div className="mb-4 h-10 w-10 rounded-xl bg-[#00BF63]/15" />
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
    <Link href={`/services/${slug}`} className="mt-5 inline-block text-sm font-semibold text-[#00BF63]">View service →</Link>
  </div>
}