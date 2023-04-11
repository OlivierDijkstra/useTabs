import { CSSProperties, MouseEvent, RefObject, useEffect, useState } from 'react';

type useTabsProps = {
  container: RefObject<HTMLElement>;
  defaultTab?: RefObject<HTMLElement>;
  duration?: number;
  zIndex?: number;
};

type HighlightStyles = {
  opacity: number;
  position: string;
  left: number;
  top: number;
  transition: string;
  pointerEvents: string;
  zIndex: number;
  width: string;
  height: string;
  transform: string;
} & CSSProperties;

type UseTabsResult = {
  setHighlight: (e: MouseEvent) => void;
  highlightStyles: HighlightStyles;
};

export default function useTabs({ container, defaultTab, duration = 150, zIndex = 0 }: useTabsProps): UseTabsResult {
  const DURATION = `${duration}ms`;

  const DEFAULT_STYLES: HighlightStyles = {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    transition: 'transform 0s, opacity 0s',
    pointerEvents: 'none',
    zIndex,
    width: '0px',
    height: '0px',
    transform: 'translate(0, 0)',
  };

  const [activeTab, setActiveTab] = useState<RefObject<HTMLElement> | HTMLElement | undefined>(defaultTab);
  const [initial, setInitial] = useState<boolean>(Boolean(!defaultTab));
  const [isHoveredFromNull, setIsHoveredFromNull] = useState<boolean>(Boolean(defaultTab));

  const [highlightStyles, setHighlightStyles] = useState<typeof DEFAULT_STYLES>(DEFAULT_STYLES);

  /**
   * Highlights a tab and updates the highlightStyles.
   * This should be called when the user hovers over a tab.
   * e.g: onMouseEnter={setHighlight}
   */
  function setHighlight(e: MouseEvent | RefObject<HTMLElement> | null): void {
    const target = ((e as MouseEvent)?.currentTarget || (e as RefObject<HTMLElement>)?.current) as HTMLElement;

    if (!container.current || !target) {
      setActiveTab(undefined);
      setIsHoveredFromNull(true);
      setHighlightStyles(DEFAULT_STYLES);
      return;
    }

    const tabRect = target.getBoundingClientRect();
    const wrapperRect = container.current.getBoundingClientRect();
    setIsHoveredFromNull(!activeTab);
    setActiveTab(target);
    updateHightlightStyles(tabRect, wrapperRect);
  }

  function updateHightlightStyles(tab: DOMRect, wrapper: DOMRect) {
    const transformDuration = isHoveredFromNull || initial ? '0ms' : DURATION;
    const opacityDuration = defaultTab ? '0ms' : DURATION;

    console.log('🔥');

    const newStyles = {
      ...DEFAULT_STYLES,
      transition: `transform ${transformDuration}, opacity ${opacityDuration}`,
      width: `${tab.width}px`,
      height: `${tab.height}px`,
      opacity: 1,
      transform: `translate(
          ${(tab.left as number) - Number(wrapper.left)}px, 
          ${(tab.top as number) - Number(wrapper.top)}px
        )`,
    };

    setHighlightStyles(newStyles);

    setInitial(false);

    setTimeout(() => {
      setHighlightStyles({
        ...newStyles,
        transition: `transform ${DURATION}, opacity ${DURATION}`,
      });
    }, duration);
  }

  useEffect(() => {
    if (defaultTab?.current) {
      setHighlight(defaultTab);
    }
  }, []);

  return {
    setHighlight,
    highlightStyles,
  };
}
