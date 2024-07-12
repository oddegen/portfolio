import { config } from "@/lib/config";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex gap-2 items-center justify-between">
      <nav>
        <ul className="flex items-center gap-2">
          {config.navItems?.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className="text-neutral-700">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
