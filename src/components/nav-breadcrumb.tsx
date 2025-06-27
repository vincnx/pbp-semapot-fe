import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { isMatch, useMatches } from "@tanstack/react-router";
import { Fragment } from "react/jsx-runtime";

const NavBreadcrumb = () => {
  const matches = useMatches();
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, "loaderData.crumb"),
  );

  const crumbs = matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: pathname,
      label: loaderData?.crumb,
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="/">Semapot</BreadcrumbLink>
        </BreadcrumbItem>
        {crumbs.map((item, idx) => (
          <Fragment key={idx}>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavBreadcrumb;
