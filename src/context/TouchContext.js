import React, { createContext, useState } from 'react';

export const TouchContext = createContext();

export const TouchProvider = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  return (
    <TouchContext.Provider value={{ isDragging, setIsDragging, startX, setStartX, scrollLeft, setScrollLeft }}>
      {children}
    </TouchContext.Provider>
  );
};
