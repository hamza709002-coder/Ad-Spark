export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="container-x flex flex-col gap-3 py-10 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
        <div><b className="text-white">Ad Spark</b> | Digital Marketing Solutions</div>
        <div>© {new Date().getFullYear()} Ad Spark. All rights reserved.</div>
      </div>
    </footer>
  );
}