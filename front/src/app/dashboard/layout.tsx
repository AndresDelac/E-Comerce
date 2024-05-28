import Link from "next/link";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return(
<>
    <div className="w-full flex flex-row items-center justify-end">
    <div className="flex flex-row items-center gap-4 w-[20%]">
    <Link href={"/dashboard/favorites"}></Link>
    <Link href={"/dashboard/orders"}></Link>
    <Link href={"/shoppingCart"}></Link>
    </div>
    </div>
    {children}
</>
    )
}