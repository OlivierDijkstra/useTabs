import useTabs from '@olivieralexander/usetabs';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const defaultRef = useRef(null);

  const { setHighlight, highlightStyles } = useTabs({
    container: containerRef,
    // defaultTab: defaultRef,
  });

  const tabs = [
    {
      name: 'Tab 1',
      id: 'tab-1',
    },
    {
      name: 'Tab 2',
      id: 'tab-2',
    },
    {
      name: 'Tab 3',
      id: 'tab-3',
    },
  ];

  return (
    <main className="w-screen h-screen grid place-items-center">
      <ul className="w-[50%] flex justify-between relative" ref={containerRef}>
        {tabs.map((tab, i) => (
          <li
            key={tab.id}
            className="py-2 px-8 border rounded cursor-pointer"
            ref={i === 1 ? defaultRef : null}
            onMouseEnter={setHighlight}
          >
            {tab.name}
          </li>
        ))}

        <div style={highlightStyles} className="bg-white bg-opacity-25" />
      </ul>
    </main>
  );
}
