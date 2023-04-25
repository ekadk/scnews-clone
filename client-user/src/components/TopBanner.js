export default function TopBanner() {
  return (
    <div className="w-full bg-sky-900 p-2">
      <div className="container mx-auto flex items-center justify-center gap-4 text-center text-white">
        <span className="font-serif font-bold text-md">
          Science News Needs You
        </span>
        <span className="font-sans text-sm">Support non-profit journalism</span>
        <button className="bg-orange-600 px-2 py-1 font-bold text-sm">SUBSCRIBE NOW</button>
      </div>
    </div>
  );
}
