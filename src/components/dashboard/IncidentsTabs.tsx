'use client';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { StyledTabPanel } from './StyledTabPanel';
import { CardTab } from './CardTab';

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTab-root': {
    minHeight: '24px',
    padding: '5px 10px',
    margin: '0px',
  },
  '& .MuiTabs-indicator': {
    backgroundColor: '#e8e8e8',
    height: '1px',
  },
});

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  borderTop: '3px solid rgb(69, 160, 246)',
  borderTopLeftRadius: '3px',
  borderTopRightRadius: '3px',
  color: 'rgba(0, 0, 0, 0.85)',
  backgroundColor: 'rgb(242,248,252)',
  fontFamily: [
    '-apple-system',
    '"Source Sans Pro"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#fff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#0e0e0e',
    borderTop: '3px solid #01234b',
    backgroundColor: '#fff',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#f0f0f0',
  },
}));

interface StyledTabProps {
  label: string;
}

const tabs = [
  {
    key: 0,
    label: 'Me@Walmart Incidents',
    component: <CardTab />,
  },
  {
    key: 1,
    label: 'My Task Incidents',
    component: <div>My Task Incidents</div>,
  },
  {
    key: 2,
    label: 'Metrics Tools Incidents',
    component: <div>Metrics Tools Incidents</div>,
  },
  {
    key: 3,
    label: 'Ask Sam',
    component: <div>Ask Sam</div>,
  },
  {
    key: 4,
    label: 'General and Not Assigned',
    component: <div>General and Not Assigned</div>,
  },
];

export function IncidentsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      <div className="bg-white">
        <AntTabs value={value} onChange={handleChange} aria-label="incidents">
          {tabs.map((tab) => (
            <AntTab key={tab.key} label={tab.label} />
          ))}
        </AntTabs>
      </div>
      <StyledTabPanel index={0}>{tabs[value].component}</StyledTabPanel>
    </div>
  );
}
