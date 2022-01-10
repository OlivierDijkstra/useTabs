import { useEffect, useState } from "react";

export default function useTabs({ container, defaultTab, duration = 150 }) {
  const DURATION = `${duration}ms`;

  const DEFAULT_STYLES = {
    opacity: 0,
    position: "absolute",
    left: 0,
    top: 0,
    pointerEvents: "none",
    zIndex: "-1",
  };

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [initial, setInitial] = useState(defaultTab);
  const [tabBoundingBox, setTabBoundingBox] = useState(
    defaultTab?.current?.getBoundingClientRect() || null
  );
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(
    defaultTab ? true : false
  );

  const [highlightStyles, setHightlightStyles] = useState(DEFAULT_STYLES);

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
