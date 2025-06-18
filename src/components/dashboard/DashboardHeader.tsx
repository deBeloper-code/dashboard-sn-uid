import {
  BellIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export function DashboardHeader() {
  return (
    <header className="flex items-center justify-between bg-wm-blue-900 shadow px-6 py-3 text-lg">
      <div className="grow-0">
        <Image src="/logo-walmart.png" alt="Logo" width={100} height={32} />
      </div>
      <nav className="grow flex flex-row items-center space-x-6">
        <div></div>
        <a href="#" className="text-white hover:bg-blue-600">
          All
        </a>
        <a href="#" className="text-white hover:bg-blue-600">
          Favorites
        </a>
        <a href="#" className="text-white hover:bg-blue-600">
          History
        </a>
        <a href="#" className="text-white hover:bg-blue-600">
          Workspaces
        </a>
      </nav>
      <div className="flex-none mx-3">
        <div className="rounded-full outline flex justify-center items-center">
          <span className="font-bold text-white px-4 ">
            Me@Walmart Incidents
          </span>
          <StarIcon className="w-4 h-4 text-yellow-400" />
          <span className="px-1 ml-2"></span>
        </div>
      </div>
      <div className="grow flex items-center justify-end space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded pl-8 pr-4 bg-blue-500 text-white"
          />
          <div
            className="absolute inset-y-0 left-0 pl-3 
                    flex items-center 
                    pointer-events-none"
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-white" />
          </div>
        </div>
        <ChatBubbleLeftRightIcon className="w-4 h-4" />
        <QuestionMarkCircleIcon className="w-4 h-4 " />
        <BellIcon className="w-4 h-4 " />
        <div className="ml-2" />
        <div className="w-8 h-8 flex items-end rounded-full bg-white text-blue-900">
          HF
          <span>
            <CheckCircleIcon className="w-3 h-3 text-green-500 ml-1" />
          </span>
        </div>
      </div>
    </header>
  );
}
