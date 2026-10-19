import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <main className="h-screen flex flex-col items-center justify-center gap-2">
        <div className=""></div>
        <Image
          src="/logo.png"
          alt="Odd Duck Out logo"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-2xl leading-none">Odd Duck Out</h1>
        <div className="flex flex-row gap-2 items-center">
          <Button width="460"><Link className="block w-full h-full px-8 py-1" href={'/signup'}>Sign Up</Link></Button>
          or
          <Button width="460"><Link className="block w-full h-full px-8 py-1" href={'/login'}>Log In</Link></Button>
        </div>
        <Link href={'/rules'} className="absolute bottom-2 right-2 border-b-5">
          RULES
        </Link>
      </main>
    </div>
  );
}
