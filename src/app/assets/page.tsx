import Image from "next/image";

export default function AssetsPage() {
  const assets = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-black">Asset Directory</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {assets.map((num) => (
          <div key={num} className="flex flex-col items-center border border-gray-200 p-4 rounded-xl">
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img 
                src={`/images/assets/asset_${num}.webp`}
                alt={`Asset ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-mono text-lg text-black font-bold">asset_{num}.webp</p>
          </div>
        ))}
      </div>
    </div>
  );
}
