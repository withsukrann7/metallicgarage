import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Yönetici Paneli"
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return <div className="bg-gray-50 min-h-screen">{children}</div>;
}
