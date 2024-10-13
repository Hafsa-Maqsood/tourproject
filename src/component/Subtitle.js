import React from 'react';

function Subtitle({ subtitle, color }) {
  return (
    <div className="subtitle">
      <h2 className="section_subtitle" style={{ color }}> {/* Apply color here */}
        {subtitle}
      </h2>
    </div>
  );
}

export default Subtitle;
