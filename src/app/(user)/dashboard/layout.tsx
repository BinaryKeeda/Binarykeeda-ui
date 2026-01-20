import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <main className="flex-1 p-4 md:p-8">{children}</main>
    </div>
  );
}
