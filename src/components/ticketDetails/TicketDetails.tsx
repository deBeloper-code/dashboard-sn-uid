'use client';
import { useEffect, useState } from 'react';
import { DetailCard } from './DetailCard';
import { LeftMenu } from './LeftMenu';
import { StatusCard } from './StatusCard';
import { TicketTracker } from './TicketTracker';
import { TitleCard } from './TitleCard';
import { Incident } from '@/types/incident';

export function TicketDetails({ id_issue }: { id_issue: string }) {
  const [data, setData] = useState<Incident | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://sn-poc-ai-service-08ff59345e4e.herokuapp.com/api/incidents?id=${id_issue}`
    )
      .then((response) => response.json())
      .then((json) => {
        if (!Array.isArray(json) || json.length === 0) {
          throw new Error('No data found');
        }
        setData(json[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data found.</div>;
  return (
    <div className="min-h-screen bg-white w-full flex flex-row text-black">
      <div className="flex text-gray-600 w-50 shadow-lg">
        <LeftMenu />
      </div>
      <div className="bg-white w-full">
        <TitleCard incidentID={data.id_issue} />
        <StatusCard status={'assigned'} />
        <DetailCard incident={data} />
        <TicketTracker title={data.id_issue} />
      </div>
    </div>
  );
}
