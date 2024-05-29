export type HeaderLinkActiveType = 'products' | 'about' | 'events' | null;

export interface HeaderProps {
  linkActive: HeaderLinkActiveType;
}
