import { PaperClipIcon } from '@heroicons/react/24/outline';
import { CustomizedTimeline } from './CustomizedTimeline';

export function TicketTracker({ title }: { title: string }) {
  return (
    <div className="flex bg-white px-4 mb-4 text-gray-700">
      <div className="border-1 border-gray-300 p-6 m-4 w-5/6 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex">
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 focus:shadow-xl block w-full p-2.5"
            placeholder="Type your message here..."
            required
          />
          <button className="bg-blue-900 text-white text-xs px-4 py-2 font-semibold hover:bg-blue-800 transition w-15">
            Send
          </button>
        </div>
        <CustomizedTimeline />
      </div>
      <div className="w-1/6 flex flex-col m-4">
        <div className="flex flex-col border-1 border-gray-300 bg-blue-100 p-3">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Attachments</p>
            <PaperClipIcon className="h-6 w-6 text-gray-500 mt-2" />
          </div>
          <div className="border-gray-300 border-2 h-24 flex items-center justify-center text-gray-500 mt-3">
            <p className="text-xs italic">Drop files here</p>
          </div>
        </div>
        <div className="flex flex-col border-1 border-gray-300 bg-blue-100 p-3 mt-3">
          <div>
            <p className="font-semibold">Watchlist</p>
          </div>
          <div className="mt-2">
            <select
              id="priority"
              name="priority"
              className="block w-full rounded-md border-gray-300 shadow-sm text-xs bg-white p-1"
              defaultValue="Select a user"
            >
              <option value="High">Select a user</option>
            </select>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button className="bg-blue-900 text-white text-xs rounded-4xl px-4 py-2 font-semibold hover:bg-blue-800 transition w-30">
              Add to Watchlist
            </button>
            <button className="bg-blue-900 text-white text-xs rounded-4xl px-4 py-2 font-semibold hover:bg-blue-800 transition w-35">
              Add Me to Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
