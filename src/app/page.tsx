import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-background">
      <div className="flex flex-col items-center space-y-8 text-center">
        <Image 
          src="/images/logo.png" 
          alt="Natürlisch Logo" 
          width={300} 
          height={150} 
          priority
        />
        <h1 className="text-6xl text-primary mt-8">Real Beauty</h1>
        <p className="text-xl text-foreground max-w-2xl font-sans">
          Natürlisch REAL BEAUTY is a beauty brand specializing in natural products. 
          It focuses on authentic personal care and a genuine approach to aesthetics.
        </p>
        <div className="flex gap-4 mt-8">
          <div className="w-16 h-16 rounded-full bg-[var(--color-brand-espresso)] shadow-md" title="Espresso Brown"></div>
          <div className="w-16 h-16 rounded-full bg-[var(--color-brand-apricot)] shadow-md" title="Pastel Apricot"></div>
        </div>
      </div>
    </main>
  );
}
