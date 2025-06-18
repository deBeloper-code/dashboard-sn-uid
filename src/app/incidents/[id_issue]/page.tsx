import { getIncident } from '@/app/lib/data/getIncident';
import { IncidentHeader, TicketDetails } from '@/components';
import { notFound } from 'next/navigation';

export default async function IncidentDetailPage({
  params,
}: {
  params: Promise<{ id_issue: string }>;
}) {
  const { id_issue } = await params;

  //   const data = await getIncident(id_issue);

  //   if (!data) return notFound();

  return (
    <div className="min-h-screen ">
      <IncidentHeader />
      <TicketDetails id_issue={id_issue} />
    </div>
  );
}
