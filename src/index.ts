import { CSSProperties, FocusEvent, MouseEvent, RefObject, useEffect, useState } from 'react';

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

type SetHighlightProperties = MouseEvent<HTMLElement> | FocusEvent<HTMLElement> | RefObject<HTMLElement>;

type UseTabsResult = {
  setHighlight: (e: SetHighlightProperties) => void;
  highlightStyles: HighlightStyles;
};

export default function useTabs({ container, defaultTab, duration = 150, zIndex = 0 }: useTabsProps): UseTabsResult {
  const DURATION = `${duration}ms`;

  const DEFAULT_STYLES: HighlightStyles = {
    opacity: 0,
    position: 'absolute',
    left: 0,
    top: 0,
    transition: `transform 0s, opacity ${DURATION}`,
    pointerEvents: 'none',
    zIndex,
    width: '0px',
    height: '0px',
    transform: 'translate(0, 0)',
  };

  const [highlightTimeout, setHighlightTimeout] = useState<NodeJS.Timer | null>(null);
  const [highlightStyles, setHighlightStyles] = useState<typeof DEFAULT_STYLES>(DEFAULT_STYLES);

  /**
   * Highlights a tab and updates the highlightStyles.
   * This should be called when the user hovers or focuses a tab.
   * e.g: onMouseEnter={setHighlight}, onFocus={setHighlight}
   * 
   * Make sure to also set a onMouseLeave on your container element to reset the highlight
   * e.g: onMouseLeave={() => setHighlight(null)} 
   */
  function setHighlight(e: SetHighlightProperties | null): void {
    const target = (Boolean((e as MouseEvent)?.currentTarget) || (e as RefObject<HTMLElement>)?.current) as HTMLElement;

    if (!e || !container.current) {
      if (highlightTimeout) clearTimeout(highlightTimeout);
      setHighlightTimeout(null);
      setHighlightStyles({
        ...highlightStyles,
        opacity: 0,
      });
      return;
    }

    const tabRect = target.getBoundingClientRect();
    const wrapperRect = container.current.getBoundingClientRect();
    updateHightlightStyles(tabRect, wrapperRect);
  }

  function updateHightlightStyles(tab: DOMRect, wrapper: DOMRect): void {
    const transformDuration = !highlightTimeout ? '0ms' : DURATION;

    if (highlightTimeout) {
      clearTimeout(highlightTimeout);
      setHighlightTimeout(null);
    }

    const newStyles = {
      ...DEFAULT_STYLES,
      transition: `transform ${transformDuration}, opacity ${DURATION}`,
      width: `${tab.width}px`,
      height: `${tab.height}px`,
      opacity: 1,
      transform: `translate(
          ${(tab.left as number) - Number(wrapper.left)}px, 
          ${(tab.top as number) - Number(wrapper.top)}px
        )`,
    };

    setHighlightStyles(newStyles);

    const timeout = setTimeout(() => {
      setHighlightStyles({
        ...newStyles,
        transition: `transform ${DURATION}, opacity ${DURATION}`,
      });
    }, duration);

    setHighlightTimeout(timeout);
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
