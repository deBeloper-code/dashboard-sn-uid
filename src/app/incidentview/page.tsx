import { IncidentHeader, TicketDetails } from '@/components';
import React from 'react';

export default function IncidentView() {
  return (
    <div className="min-h-screen ">
      <IncidentHeader />
      <TicketDetails />
    </div>
  );
}
