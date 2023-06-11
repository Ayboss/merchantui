export type TabLinksType = {
  links: { url: string; label: string }[];
  current: string;
};

export interface TabsNavigationLinkType {
  $current: string;
  $selected: string;
}
