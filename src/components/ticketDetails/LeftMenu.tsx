import { ClipboardIcon } from '@heroicons/react/24/outline';
import { Squares2X2Icon } from '@heroicons/react/24/solid';

export function LeftMenu() {
  const iconItems = [
    {
      name: 'My Portal Pages',
      icon: <Squares2X2Icon className="w-6 h-6 text-gray-500" />,
    },
    {
      name: 'Report and Incident',
      icon: <ClipboardIcon className="w-6 h-6 text-gray-500" />,
    },
  ];
  const menuItems = [
    { name: 'Access and Accounts', href: '#access' },
    { name: 'Applications', href: '#applications' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Hardware Ordering', href: '#hardware-ordering' },
    { name: 'Information Security', href: '#information-security' },
    { name: 'Operations', href: '#operations' },
    { name: 'Reporting / Data Analytics', href: '#reporting' },
  ];
  return (
    <div className="w-64 bg-white ">
      <div className="border-b border-gray-200 p-4">
        <ul className="space-y-1 pr-3">
          {iconItems.map((item) => (
            <li key={item.name} className="flex items-center py-2">
              {item.icon}
              <span className="ml-2 text-sm font-semibold">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <h2 className="text-lg text-gray-300 text-sm pl-4 mt-6">SERVICES</h2>
      <ul className="space-y-1 pr-3">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="group flex items-center relative pl-2 py-2 font-semibold text-sm"
            >
              <span className="absolute left-0 top-0 h-full w-1 bg-red-600 transition-all scale-y-0 group-hover:scale-y-100 origin-top"></span>
              <div className="flex items-center justify-between w-full pl-2">
                <span className="relative z-10">{item.name}</span>
                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-0 border-t-4 border-t-gray-900"></div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
