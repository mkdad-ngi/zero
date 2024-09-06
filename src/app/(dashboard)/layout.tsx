import Link from "next/link";
import Image
 from "next/image";
import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[14%] xl:w-[16%]">
      <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
        <Image src="/ngi-logo-white.png" alt="logo image" width={32} height={32}/>
        <span className="hidden lg:block">Zero</span>
      </Link>
      <Menu/>
    </div>
    {/* RIGHT */}
    <div className="w-[86%] md:w-[92%] lg:w-[86%] xl:w-[84%] bg-[#F7F8FA] overflow-scroll flex flex-col">
      <NavBar/>
      {children}
    </div>
  </div>;
}
