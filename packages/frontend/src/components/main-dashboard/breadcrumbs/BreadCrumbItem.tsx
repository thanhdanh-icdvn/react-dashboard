import { Link } from 'react-router-dom';

export type BreadCrumbItemProps = {
  label: string;
  href: string;
};
export default function BreadCrumbItem({ label, href }: BreadCrumbItemProps) {
  return <Link to={href}>{label}</Link>;
}
