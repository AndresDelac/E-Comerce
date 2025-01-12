import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(
<>
    <div className="w-full flex flex-row items-center justify-center bg-slate-800 text-white text-2xl">
    <div className="flex flex-row items-center gap-4 w-[20%]">
    <Link href={"/dashboard/favorites"}>Favorites</Link>
    <Link href={"/dashboard/orders"}>Orders</Link>
    </div>
    </div>
    {children}
</>
    )
}