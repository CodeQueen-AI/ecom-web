"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname(); // current path, e.g. /signup
  const pathParts = pathname.split("/").filter(Boolean); // ['signup']

  return (
    <div className="text-sm text-gray-500 mb-6 poppins">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/");
        const isLast = index === pathParts.length - 1;

        return (
          <span key={index}>
            {" / "}
            {isLast ? (
              <span className="font-semibold">{part.charAt(0).toUpperCase() + part.slice(1)}</span>
            ) : (
              <Link href={href} className="hover:underline">
                {part.charAt(0).toUpperCase() + part.slice(1)}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}