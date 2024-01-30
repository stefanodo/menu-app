import Image from "next/image";
import MenuImage from "./bruschetta.png";
import { SVGProps } from "react";

export const metadata = {
  title: "Bebidas",
  description: "cualquier cosa",
};

export default function BebidasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*         <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
          <div className="flex items-center gap-2">
            <MenuIcon className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Delicious Restaurant</h1>
          </div>
        </header> */}
      <main className="flex-1 p-4 bg-white">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Bebidas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-4">
              <Image
                alt="Product Image"
                className="w-32 h-32 object-cover rounded-md"
                height="100"
                src={MenuImage}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <h3 className="font-bold">Bruschetta</h3>
                <p className="text-gray-500"> $8.00 </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 pb-1">
                  A classic Italian starter with fresh tomatoes and basil.
                </p>
                <div key="1" className="flex items-center gap-2 flex-wrap">
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <WheatIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Gluten</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <MilkIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Dairy</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <NutIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Nuts</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <EggIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Eggs</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <FishIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Seafood</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <SproutIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Soy</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <VeganIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Vegan</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <WheatIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Wheat</h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ChevronRightIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                alt="Product Image"
                className="w-32 h-32 object-cover rounded-md"
                height="100"
                src={MenuImage}
                style={{
                  aspectRatio: "100/100",
                  objectFit: "cover",
                }}
                width="100"
              />
              <div className="flex-1">
                <h3 className="font-bold">Bruschetta</h3>
                <p className="text-gray-500"> $8.00 </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 pb-1">
                  A classic Italian starter with fresh tomatoes and basil.
                </p>
                <div key="1" className="flex items-center gap-2 flex-wrap">
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <WheatIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Gluten</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <MilkIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Dairy</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <NutIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Nuts</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <EggIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Eggs</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <FishIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Seafood</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <SproutIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Soy</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <VeganIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Vegan</h2>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-200 rounded-md p-2 flex items-center gap-2">
                    <WheatIcon className="h-4 w-4" />
                    <h2 className="text-sm font-medium">Wheat</h2>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <ChevronRightIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function EggIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z" />
    </svg>
  );
}

function SproutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}

function FishIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function MilkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
  );
}

function NutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  );
}

function VeganIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" />
      <path d="M16 8c4 0 6-2 6-6-4 0-6 2-6 6" />
      <path d="M17.41 3.6a10 10 0 1 0 3 3" />
    </svg>
  );
}

function WheatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22 16 8" />
      <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
      <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
      <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    </svg>
  );
}
