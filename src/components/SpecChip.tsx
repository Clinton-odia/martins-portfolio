import React from 'react';

interface SpecChipProps {
  label: string;
  value: string;
  className?: string;
}

export const SpecChip: React.FC<SpecChipProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`spec-chip ${className}`}>
      <span className="label">{label}</span>
      <span className="val">{value}</span>
    </div>
  );
};
