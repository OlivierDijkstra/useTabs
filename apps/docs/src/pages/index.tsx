import useTabs from '@olivieralexander/usetabs';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const defaultRef = useRef(null);

  const { setHighlight, highlightStyles } = useTabs({
    container: containerRef,
    // duration: 150,
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
      <div className="w-[50%] flex flex-col gap-2 md:flex-row justify-between relative" ref={containerRef} onMouseLeave={() => setHighlight(null)}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            className="py-2 px-8 border rounded cursor-pointer"
            ref={i === 1 ? defaultRef : null}
            onMouseEnter={setHighlight}
            onFocus={setHighlight}
            tabIndex={0}
          >
            {tab.name}
          </button>
        ))}

        <div style={highlightStyles} className="bg-white bg-opacity-25" />
      </div>
    </main>
  );
}
