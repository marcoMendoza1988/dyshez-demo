import React from 'react';

type BadgeProps = {
  status: 'active' | 'not active' | 'disabled';
};

const Badge: React.FC<BadgeProps> = ({ status }) => {
  const statusColors = {
    active: 'text-green-900 bg-green-200',
    'not active': 'text-red-900 bg-red-200',
    disabled: 'text-orange-900 bg-orange-200',
  };

  return (
    <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${statusColors[status]}`}>
      <span aria-hidden className="absolute inset-0 opacity-50 rounded-full"></span>
      <span className="relative text-xs">{status}</span>
    </span>
  );
};

export default Badge;
