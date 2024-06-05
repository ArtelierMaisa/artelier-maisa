export type ScrollToType = 'products' | 'about' | 'events' | null;

export interface ScrollToContextProps {
  to: ScrollToType;
  handleTo(newTo: ScrollToType): void;
}
