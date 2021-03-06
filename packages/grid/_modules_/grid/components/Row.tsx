import * as React from 'react';
import { RowId } from '../models';
import { ROW_CSS_CLASS } from '../constants/cssClassesConstants';
import { classnames } from '../utils';
import { densityRowHeightSelector } from '../hooks/features/density';
import { ApiContext } from './api-context';
import { useGridSelector } from '../hooks/features/core/useGridSelector';

export interface RowProps {
  id: RowId;
  selected: boolean;
  className: string;
  rowIndex: number;
}

export const Row: React.FC<RowProps> = ({ selected, id, className, rowIndex, children }) => {
  const ariaRowIndex = rowIndex + 2; // 1 for the header row and 1 as it's 1 based
  const apiRef = React.useContext(ApiContext);
  const rowHeight = useGridSelector(apiRef, densityRowHeightSelector);

  return (
    <div
      key={id}
      data-id={id}
      data-rowindex={rowIndex}
      role="row"
      className={classnames(ROW_CSS_CLASS, className, { 'Mui-selected': selected })}
      aria-rowindex={ariaRowIndex}
      aria-selected={selected}
      style={{
        maxHeight: rowHeight,
        minHeight: rowHeight,
      }}
    >
      {children}
    </div>
  );
};

Row.displayName = 'Row';
