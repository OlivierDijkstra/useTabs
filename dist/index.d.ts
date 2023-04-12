import { RefObject, CSSProperties, MouseEvent, FocusEvent } from 'react';

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
declare function useTabs({ container, defaultTab, duration, zIndex }: useTabsProps): UseTabsResult;

export { useTabs as default };
