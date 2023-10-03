import BreadCrumbItem, { BreadCrumbItemProps } from "./BreadCrumbItem";

export type BreadCrumbsProps = {
  breadcrumbsData: BreadCrumbItemProps[];
};
export default function BreadCrumbs({ breadcrumbsData }: BreadCrumbsProps) {
  return (
    <ul className="breadcrumbs">
      {breadcrumbsData.map((breadcrumb, idx) => (
        <li key={breadcrumb.label}>
          {idx === breadcrumbsData.length - 1 ? (
            <span>{breadcrumb.label}</span>
          ) : (
            <BreadCrumbItem {...breadcrumb} />
          )}
        </li>
      ))}
    </ul>
  );
}
