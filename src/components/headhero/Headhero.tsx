/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AsxiwnXAvgu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import BackgroundImage from "./bruschetta.png";
import BackgroundImage2 from "./bruschetta.png";

export default function HeadHero() {
    return ( 
        <>
            <div className="relative w-full h-80">
                <Image
                alt="Background"
                className="absolute object-cover w-full h-full"
                height={1080}
                src={BackgroundImage}
                style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                }}
                width={1920}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    alt="Logo"
                    className="rounded-full object-contain shadow-lg"
                    height={200}
                    src={BackgroundImage2}
                    style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                    }}
                    width={200}
                />
                </div>
            </div>
        </>
    )
}