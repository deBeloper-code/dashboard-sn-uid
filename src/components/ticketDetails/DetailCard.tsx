import { Incident } from '@/types/incident';

export function DetailCard({ incident }: { incident: Incident }) {
  const status_harcoded = 'assigned'; // This is a hardcoded value for demonstration purposes
  const statusList = [
    { id: 1, status: 'new', label: 'New' },
    { id: 2, status: 'assigned', label: 'Assigned' },
    { id: 3, status: 'wip', label: 'Work in progress' },
    { id: 4, status: 'resolved', label: 'Resolved' },
    { id: 5, status: 'closed', label: 'Closed' },
  ];

  const statusObj = statusList.find((s) => s.status === status_harcoded);

  return (
    <div className="bg-white px-4 text-gray-700">
      <div className="border-1 border-gray-300 p-6 mx-4">
        <div className="border-b-1 border-gray-300 mb-2">
          <h2 className="text-3xl font-semibold mb-2">{incident.id_issue}</h2>
        </div>
        <div className="flex flex-col border-b-1 border-gray-300 text-sm mb-2 py-2">
          <span>Status</span>
          <span className="font-semibold">
            {statusObj ? statusObj.label : status_harcoded}
          </span>
        </div>
        <div className="flex border-b-1 border-gray-300 text-sm mb-2 py-2">
          <div className="flex flex-col w-2/3 gap-3">
            <div className="flex flex-col">
              <span>Number</span>
              <span className="font-semibold">{incident.id_issue}</span>
            </div>
            <div className="flex flex-col">
              <span>Caller</span>
              <span className="font-semibold">AI Service Now</span>
            </div>
            <div className="flex flex-col">
              <span>Notify</span>
              <span className="font-semibold">Do Not Notify</span>
            </div>
            <div className="flex flex-col">
              <span>Site</span>
              <span className="font-semibold">1885.MX </span>
            </div>
            <div className="flex flex-col">
              <span>Caller</span>
              <span className="font-semibold">AI Service Now</span>
            </div>
            <div className="flex flex-col">
              <span>Category</span>
              <span className="font-semibold">Application</span>
            </div>
            <div className="flex flex-col">
              <span>Severity</span>
              <span className="font-semibold">3 - Low</span>
            </div>
            <div className="flex flex-col">
              <span>CI class</span>
              <span className="font-semibold">Business Application</span>
            </div>
            <div className="flex flex-col">
              <span>Category</span>
              <span className="font-semibold">Application</span>
            </div>
            <div className="flex flex-col">
              <span>Knowledge ID</span>
              <span className="font-semibold">KB1138160 v4.0</span>
            </div>
            <div className="flex flex-col">
              <span>Corporate Impacting Incident</span>
              <span className="font-semibold">false</span>
            </div>
          </div>
          <div className="flex flex-col w-1/3 gap-3">
            <div className="flex flex-col">
              <span>Reopen count</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex flex-col">
              <span>Child incidents</span>
              <span className="font-semibold">0</span>
            </div>
            <div className="flex flex-col">
              <span>Opened</span>
              <span className="font-semibold">
                {incident.sys_created_on.toString()}
              </span>
            </div>
            <div className="flex flex-col">
              <span>Channel</span>
              <span className="font-semibold">Self-service</span>
            </div>
            <div className="flex flex-col">
              <span>Workaround provided</span>
              <span className="font-semibold">false</span>
            </div>
            <div className="flex flex-col">
              <span>Impact</span>
              <span className="font-semibold">3 - Moderate</span>
            </div>
            <div className="flex flex-col">
              <span>Is Major Incident</span>
              <span className="font-semibold">false</span>
            </div>
            <div className="flex flex-col">
              <span>Urgency</span>
              <span className="font-semibold">2 - High</span>
            </div>
            <div className="flex flex-col">
              <span>Priority</span>
              <span className="font-semibold">3 - Medium</span>
            </div>
            <div className="flex flex-col">
              <span>Assignment group</span>
              <span className="font-semibold">{incident.assignment_group}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-b-1 border-gray-300 text-sm mb-2 py-2">
          <span>Assigned to</span>
          <span className="font-semibold">{incident.assigned_to}</span>
        </div>
        <div className="flex flex-col border-b-1 border-gray-300 text-sm mb-2 py-2">
          <span>Short description (Knowledge search)</span>
          <span className="font-semibold">{incident.short_description}</span>
        </div>
        <div className="flex flex-col border-b-1 border-gray-300 text-sm mb-2 py-2">
          <div className="flex flex-col">
            <span>Description (Customer visible)</span>
            <span className="font-semibold">{incident.description}</span>
          </div>
          <div className="flex flex-col mt-2">
            <span>Confidential</span>
            <span className="font-semibold">false</span>
          </div>
        </div>
        <div className="flex border-b-1 border-gray-300 text-sm mb-2 py-2">
          <div className="flex flex-col w-1/2">
            <span>Workaround provided</span>
            <span className="font-semibold">false</span>
          </div>
          <div className="flex flex-col w-1/2">
            <span>Reconvene requested</span>
            <span className="font-semibold">false</span>
          </div>
        </div>
        <div className="flex flex-col border-b-1 border-gray-300 text-sm mb-2 py-2 gap-3">
          <div className="flex flex-col">
            <span>Reconvene MI manager approved</span>
            <span className="font-semibold">false</span>
          </div>
          <div className="flex flex-col">
            <span>Corporate Impacting Incident</span>
            <span className="font-semibold">false</span>
          </div>
        </div>
        <div className="flex text-sm py-2">
          <div className="flex flex-col w-1/2 gap-3">
            <div className="flex flex-col">
              <span>Reconvene requested</span>
              <span className="font-semibold">false</span>
            </div>
            <div className="flex flex-col">
              <span>Reconvene requested</span>
              <span className="font-semibold">false</span>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <span>Create KB Article</span>
            <span className="font-semibold">No</span>
          </div>
        </div>
      </div>
    </div>
  );
}
