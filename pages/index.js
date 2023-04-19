import Image from "next/image";
import { Inter } from "next/font/google";
import Intro from "@/components/Intro";
import TechILike from "@/components/TechILike";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <Intro />
      <TechILike />
    </div>
  );
}
