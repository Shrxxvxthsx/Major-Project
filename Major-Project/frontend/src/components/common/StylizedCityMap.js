import React from 'react';
import { LeafletCityMap } from '@/components/common/LeafletCityMap';

export const StylizedCityMap = ({ points = [], onSelect, selectedId, showHotspots = true, className, height = 460 }) => (
  <LeafletCityMap
    points={points}
    onSelect={onSelect}
    selectedId={selectedId}
    showHotspots={showHotspots}
    className={className}
    height={height}
  />
);
