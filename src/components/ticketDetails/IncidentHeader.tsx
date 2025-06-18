import {
  BellIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  GlobeAmericasIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export function IncidentHeader() {
  return (
    <header className="flex items-center justify-between bg-wm-blue-900 shadow px-6 py-3 text-lg space-x-4 text-white">
      <div className="grow-0">
        <Image src="/logo-walmart.png" alt="Logo" width={150} height={32} />
      </div>

      <div className="flex-none mx-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded pl-3 pr-4 bg-white text-black w-150"
          />
          <div
            className="absolute inset-y-0 right-0 pr-3 
                    flex items-center 
                    pointer-events-none"
          >
            <MagnifyingGlassIcon className="w-4 h-4 text-black" />
          </div>
        </div>
      </div>
      <div className="grow flex items-center justify-end space-x-4">
        <div className="flex items-center space-x-1">
          <GlobeAmericasIcon className="w-6 h-6 text-white" />
          <p>English</p>
          <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-0 border-t-4 border-t-white"></div>
        </div>
        <div className="flex items-center space-x-1">
          <ClipboardDocumentListIcon className="w-6 h-6 text-white" />
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm">
            2
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <CheckCircleIcon className="w-6 h-6 text-white" />
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm">
            2
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <ShoppingCartIcon className="w-6 h-6 text-white" />
          <div className="w-4 h-4 flex items-center justify-center rounded-full bg-yellow-500 text-black text-sm">
            2
          </div>
        </div>
      </div>

      <div className="ml-2" />
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-blue-900">
        HF
      </div>
      <p className="text-sm">Hasany Fonseca (h0f01wq)</p>
    </header>
  );
}
