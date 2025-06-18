import {
  PlusCircleIcon,
  Squares2X2Icon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';

export function SubHeader() {
  return (
    <div className="bg-gray-100 p-4 flex items-center justify-between">
      <Bars3Icon className="w-4 h-4 text-gray-600 cursor-pointer" />
      <Squares2X2Icon className="w-5 h-5 text-gray-600 cursor-pointer" />
      <h2 className="text-xl  text-black">Me@Walmart Incidents</h2>
      <PlusCircleIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
      <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
    </div>
  );
}
