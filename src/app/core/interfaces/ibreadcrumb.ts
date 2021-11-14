export interface IBreadcrumb {
  link: string;
  label: string;
  parents?: IBreadcrumb[] | undefined;
}
