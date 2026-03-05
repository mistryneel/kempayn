import { BRANDS } from '../../constants/data';

export function BrandCloud() {
  return (
    <section className="py-20 bg-black border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-[9px] font-black tracking-[0.6em] text-neutral-700 mb-16 uppercase">
          Architecture Built On
        </p>
        <div className="flex flex-wrap justify-center gap-x-24 gap-y-12 opacity-20 grayscale hover:opacity-100 transition-all duration-1000">
          {BRANDS.map((brand) => (
            <div key={brand} className="font-black text-xl tracking-[-0.05em]">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
