import { RefObject } from "react";
declare type useTabsProps = {
    container: RefObject<HTMLElement>;
    defaultTab: RefObject<HTMLElement>;
    duration: number;
    zIndex: number;
};
/**
 * @param {RefObject<HTMLElement>} container
 * @param {RefObject<HTMLElement>} defaultTab
 * @param {number} duration
 * @param {number} zIndex
 *
 * @returns {[Function, Object]}
 */
export default function useTabs({ container, defaultTab, duration, zIndex, }: useTabsProps): {
    setHighlight: (e: any) => void;
    highlightStyles: {
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
    };
};
export {};
