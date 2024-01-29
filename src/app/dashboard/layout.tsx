import Navbar from "@/components/navbar/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <div className="p-2 w-full text-slate-900">
          {children}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Navbar />
      </div>

    </div>
  );
}
