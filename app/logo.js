import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
        <Link href={'/'}>
            <Image className="absolute top-2 left-2"
                src="/logo.png"
                alt="Odd Duck Out logo"
                width={100}
                height={100}
                priority
                />
        </Link>
    )
}