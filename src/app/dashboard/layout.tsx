'use client';
import HeadHero from "@/components/headhero/Headhero";
import Navbar from "@/components/navbar/Navbar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMainPage = usePathname();
  return (
    <div className="relative flex flex-col bg-white overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      { isMainPage !== '/dashboard/main' && (
        <div className="fixed top-0 w-full bg-white p-4 pb-0">
          <HeadHero />
        </div>
      )}

      <div className="flex">
        <div className="p-2 w-full text-slate-900">
          {children}
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Navbar />
      </div>
    </div>
  );
}
