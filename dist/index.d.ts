import { RefObject } from "react";
declare type useTabsProps = {
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
export default function useTabs({ container, defaultTab, duration, }: useTabsProps): {
    setHightlight: (e: any) => void;
    highlightStyles: {
        opacity: number;
        position: string;
        left: number;
        top: number;
        transition: string;
        pointerEvents: string;
        zIndex: string;
        width: string;
        height: string;
        transform: string;
    };
};
export {};
