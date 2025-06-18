import { DashboardHeader, IncidentsTabs, SubHeader } from '@/components';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen ">
      <DashboardHeader />
      <SubHeader />
      <IncidentsTabs />
    </div>
  );
}
