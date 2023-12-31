"use client";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { usePathname } from "next/navigation";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function BreadcrumbNav() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  if (pathNames.length === 0) return null;
  return (
    <div className="absolute top-0 left-0 px-4 w-full flex items-center justify-center">
      <div className="relative grow pt-6 sm:pt-20 max-w-5xl px-2">
        <Breadcrumbs>
          <BreadcrumbItem href="/" key="home">
            Home
          </BreadcrumbItem>
          {pathNames.map((pathName, index) => {
            const path = `/${pathNames.slice(0, index + 1).join("/")}`;
            return (
              <BreadcrumbItem href={path} key={pathName}>
                {capitalizeFirstLetter(pathName)}
              </BreadcrumbItem>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
}
