import { ReactNode } from 'react';

export const StyledTabPanel = ({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) => {
  return <div data-testid={`tabPanel-${index}`}>{children}</div>;
};
