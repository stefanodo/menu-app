/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AsxiwnXAvgu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image";
import BackgroundImage from "./bruschetta.png";
import BackgroundImage2 from "./crush2.png";

export default function HeadHero() {
    return ( 
        <>
            <div className="relative w-full h-60">
                <Image
                    alt="Background"
                    className="absolute object-cover w-full h-full rounded-2xl"
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
                        height={160}
                        src={BackgroundImage2}
                        style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                        }}
                        width={160}
                    />
                </div>
            </div>
            <h2 className="bg-white pt-2 pb-2 text-lg text-black font-bold font-sans">Restaurante Crush Burgers</h2>
            <hr />
        </>
    )
}