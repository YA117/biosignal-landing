import Link from "next/link";

export const metadata = {
  title: "The BioSignal Method — Coming Soon",
};

export default function MethodPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1c1917] px-6">
      <span className="text-xs uppercase tracking-[0.25em] text-[#c4733b]">
        Coming Soon
      </span>
      <h1 className="mt-4 text-3xl font-light text-white sm:text-4xl">
        The BioSignal <span className="italic">Method</span>
      </h1>
      <p className="mt-4 text-sm text-white/40">
        A detailed look at our three-system approach. Launching soon.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:bg-white hover:text-[#1c1917]"
      >
        Back to Home
      </Link>
    </div>
  );
}
