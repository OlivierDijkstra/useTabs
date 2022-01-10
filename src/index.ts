import { RefObject, useEffect, useState } from "react";

type useTabsProps = {
  container: RefObject<HTMLElement>;
  defaultTab: RefObject<HTMLElement>;
  duration: number;
};

/**
 * @param {RefObject<HTMLElement>} container
 * @param {RefObject<HTMLElement>} defaultTab
 * @param {number} duration
 *
 * @returns {[Function, Object]}
 */
export default function useTabs({
  container,
  defaultTab,
  duration = 150,
}: useTabsProps) {
  const DURATION = `${duration}ms`;

  const DEFAULT_STYLES = {
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 0,
    transition: "transform 0s, opacity 0s",
    pointerEvents: "none",
    zIndex: "-1",
    width: "0px",
    height: "0px",
    transform: "translate(0, 0)",
  };

  const [activeTab, setActiveTab] = useState<RefObject<HTMLElement> | null>(
    defaultTab
  );
  const [initial, setInitial] = useState<boolean>(defaultTab ? true : false);
  const [tabBoundingBox, setTabBoundingBox] = useState<DOMRect | null>(
    defaultTab?.current?.getBoundingClientRect() || null
  );
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState<boolean>(
    defaultTab ? true : false
  );

  const [highlightStyles, setHightlightStyles] =
    useState<typeof DEFAULT_STYLES>(DEFAULT_STYLES);

  /**
   * Highlights a tab and updates the highlightStyles.
   * This should be called when the user hovers over a tab.
   * e.g: onMouseEnter={setHighlight}
   *
   * @param   {MouseEvent}  e  onMouseEnter event
   *
   * @return  {void}
   */
  function setHightlight(e) {
    if (!e) {
      return;
    }

    const target = e?.target || e?.current;

    setTabBoundingBox(target.getBoundingClientRect());
    setWrapperBoundingBox(container.current.getBoundingClientRect());
    setIsHoveredFromNull(!activeTab);
    setActiveTab(e);
  }

  function updateHightlightStyles(tab, wrapper) {
    const transformDuration = isHoveredFromNull || initial ? "0ms" : DURATION;
    const opacityDuration = defaultTab ? "0ms" : DURATION;

    setHightlightStyles({
      ...DEFAULT_STYLES,
      transition: `transform ${transformDuration}, opacity ${opacityDuration}`,
      width: `${tab.width}px`,
      height: `${tab.height}px`,
      opacity: activeTab ? 1 : 0,
      transform: `translate(
          ${tab.left - wrapper.left}px, 
          ${tab.top - wrapper.top}px
        )`,
    });

    setInitial(false);
  }

  useEffect(() => {
    if (tabBoundingBox && wrapperBoundingBox) {
      updateHightlightStyles(tabBoundingBox, wrapperBoundingBox);
    }
  }, [tabBoundingBox, wrapperBoundingBox]);

  useEffect(() => {
    if (defaultTab?.current) {
      setHightlight(defaultTab);
    }
  }, []);

  return {
    setHightlight,
    highlightStyles,
  };
}
