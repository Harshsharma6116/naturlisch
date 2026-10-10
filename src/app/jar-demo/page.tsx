import { TopDownJar } from '@/components/ui/TopDownJar';

export default function JarDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center gap-12 py-20">
      <h1 className="font-heading text-4xl text-primary">CSS/SVG Jar Generator</h1>
      <p className="text-foreground/70 font-sans max-w-md text-center">
        This is a fully programmable, code-generated version of your product jars. You can pass any hex color to it!
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <TopDownJar colorHex="#3b5bf2" className="w-80 h-80" lidOffset={{x: -70, y: -20}} />
          <span className="font-sans font-bold text-primary">Blue Scrub</span>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <TopDownJar colorHex="#663300" className="w-80 h-80" lidOffset={{x: 80, y: 30}} />
          <span className="font-sans font-bold text-primary">Espresso Balm</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <TopDownJar colorHex="#4A7C59" className="w-80 h-80" lidOffset={{x: -60, y: 60}} />
          <span className="font-sans font-bold text-primary">Matcha Mask</span>
        </div>
      </div>
    </div>
  );
}
