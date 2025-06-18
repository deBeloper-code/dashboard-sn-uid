import { ArrowRightIcon, CheckIcon, PlayIcon } from '@heroicons/react/24/solid';

export function StatusCard({ status: _status }: { status: string }) {
  const statusList = [
    { id: 1, status: 'new', label: 'New' },
    { id: 2, status: 'assigned', label: 'Assigned' },
    { id: 3, status: 'wip', label: 'Work in progress' },
    { id: 4, status: 'resolved', label: 'Resolved' },
    { id: 5, status: 'closed', label: 'Closed' },
  ];
  const currentIndex = statusList.findIndex((s) => s.status === _status);

  return (
    <div className="flex flex-col items-center bg-white shadow-md p-4">
      <ul className="flex mt-4 space-x-40">
        {statusList.map(({ id, status, label }, idx) => {
          let icon = null;
          if (idx < currentIndex) {
            icon = <CheckIcon className="w-4 h-4 text-gray-900" />; // Before
          } else if (idx === currentIndex) {
            icon = <PlayIcon className="w-4 h-4 text-gray-900" />; // Current
          } else {
            icon = <ArrowRightIcon className="w-4 h-4 text-gray-900" />; // After
          }
          return (
            <li key={id} className="flex flex-col space-y-4 items-center">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full ${
                  idx === currentIndex ? 'bg-green-300' : 'bg-gray-200'
                } text-blue-900`}
              >
                {icon}
              </div>
              <span
                className={`text-sm ${status === _status ? 'font-bold' : ''}`}
              >
                {label}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
