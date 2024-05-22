'use client'

import React, { useEffect, useState } from 'react';

interface TabProps {
  label: string;
  onClick: () => void;
  active: boolean;
}

const Tab: React.FC<TabProps> = ({ label, onClick, active }) => {
  return (
    <button
        className='justify-between text-xl font-bold'
      onClick={onClick}
      style={{
        padding: '10px 20px',
        cursor: 'pointer',
        backgroundColor: active ? '#fff' : '#fff',
        color: active ? '#000' : '#00000080',
        border: 'none',
        borderBottom: active ? '4px solid #000' : '2px solid transparent',
        outline: 'none'
      }}
    >
      {label}
    </button>
  );
};

interface TabsProps {
  tabs: string[];
  children: React.ReactNode[];
  getIndex: any
}

const Tabs: React.FC<TabsProps> = ({ tabs, children, getIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div>
        <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            borderBottom: 'center' 
        }}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab}
            onClick={() => setActiveIndex(index)}
            active={index === activeIndex}
          />
        ))}
      </div>
      <div style={{ padding: '20px' }}>
        {children[activeIndex]}
      </div>
    </div>
  );
};

export default Tabs;
