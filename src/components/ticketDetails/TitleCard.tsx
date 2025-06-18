import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid';

export function TitleCard({ incidentID }: { incidentID: string }) {
  return (
    <div className="bg-gray-200 shadow-md p-6">
      <h2 className="text-3xl font-semibold text-gray-800">Ticket Details</h2>
      <div className="flex items-center gap-2 mt-2 text-gray-800">
        <HomeIcon className="w-4 h-4" />
        <ChevronRightIcon className="w-4 h-4" />
        <span className="text-sm">My tickets</span>
        <ChevronRightIcon className="w-4 h-4" />
        <span className="text-sm">{incidentID}</span>
      </div>
    </div>
  );
}
