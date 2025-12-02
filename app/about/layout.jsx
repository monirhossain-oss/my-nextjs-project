import Link from "next/link";

export const metadata = {
    title: "About",
    description: "This is about page",
};

export default function AboutLayout({ children }) {
    return (
        <div>
            <nav>
                <ul className="flex gap-4 text-xl">
                    <li><Link href="/about/mission">Mission</Link></li>
                    <li><Link href="/about/vission">Vission</Link></li>
                    <li><Link href="/about/tission">Tission</Link></li>
                </ul>
            </nav>
            <hr />
            <div className="mb-10"></div>
            {children}
        </div>
    );
}
