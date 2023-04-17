import Header from "@/components/Header";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="w-full md:w-5/6 max-w-[1024px] mx-auto bg-slate-800 shadow-lg shadow-slate-950/50 min-h-screen">
      <Header />
      <div className="p-4 text-slate-700 mx-12">
        <Component className="p-4" {...pageProps} />
      </div>
    </div>
  );
}
