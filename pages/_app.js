import Header from "@/components/Header";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="p-4 text-slate-700">
        <Component className="p-4" {...pageProps} />
      </div>
    </>
  );
}
