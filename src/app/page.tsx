import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
        {/* Test image */}
        <div className="relative w-48 h-48 mb-8 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/tali-portrait-1.jpg"
            alt="טלי מפציר"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[var(--color-primary-dark)] mb-4">
          טלי מפציר
        </h1>

        {/* Subheading */}
        <p className="text-xl text-[var(--color-neutral-600)] mb-8">
          ליווי אישי בשיטת סאטיר
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="px-8 py-4 text-lg font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] rounded-full transition-colors shadow-md"
        >
          לשיחת היכרות
        </a>

        {/* Color palette test */}
        <div className="mt-16 flex gap-4">
          <div className="w-16 h-16 rounded-lg bg-[var(--color-primary-light)]" title="primary-light" />
          <div className="w-16 h-16 rounded-lg bg-[var(--color-primary)]" title="primary" />
          <div className="w-16 h-16 rounded-lg bg-[var(--color-primary-dark)]" title="primary-dark" />
          <div className="w-16 h-16 rounded-lg bg-[var(--color-accent)]" title="accent" />
        </div>
      </main>
    </div>
  );
}
