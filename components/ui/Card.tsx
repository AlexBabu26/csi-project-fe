import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  footer?: React.ReactNode;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, footer, noPadding = false }) => {
  return (
    <div className={`bg-white border border-borderColor rounded shadow-sm mb-6 ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b border-borderColor">
          <h3 className="text-lg font-semibold text-textDark">{title}</h3>
        </div>
      )}
      <div className={noPadding ? '' : 'p-6'}>
        {children}
      </div>
      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-borderColor rounded-b">
          {footer}
        </div>
      )}
    </div>
  );
};