import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/public/dayli_main.jpg";

export default function Home() {
  return (
    <div className="grid grid-cols-4 grid-rows-1 h-screen">
      <nav className="col-span-1 bg-amber-200">
        <Link href={"home"}>home</Link>
        <Link href={"post"}>post</Link>
      </nav>
      <main className="col-span-3 bg-red-100">
        <Image
          src={HeroImage}
          alt="dayli-main-image"
          width={500}
          height={500}
        />
      </main>
    </div>
  );
}
