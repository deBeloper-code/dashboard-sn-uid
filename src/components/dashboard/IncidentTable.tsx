'use client';
import { cutStringToSpecificLength } from '@/app/utils/commons';
import { Incident } from '@/types/incident';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function IncidentTable() {
  const [data, setData] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://sn-poc-ai-service-08ff59345e4e.herokuapp.com/api/incidents')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
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
    <div className="flex flex-col m-0 p-0 border border-blue-100 rounded-md shadow-lg">
      <div className="bg-blue-50 p-1 rounded-t-md">
        <h2 className="p-1 m-1 text-sm">Me@Walmart International List</h2>
      </div>
      <div className="bg-white shadow rounded-b-md ">
        <table className="min-w-full text-md ">
          <thead className="text-gray-700 text-sm ">
            <tr className="border-b border-blue-100">
              <th className="text-left px-3">Number</th>
              <th className="text-left pr-3">Site</th>
              <th className="text-left pr-3">
                Short description (Knowledge search)
              </th>
              <th className="text-left pr-3">Description (Customer visible)</th>
              <th className="text-left pr-3">State</th>
              <th className="text-left pr-3">Pending reason</th>
              <th className="text-left pr-3">Opened</th>
              <th className="text-left pr-3">Opened by</th>
              <th className="text-left pr-3">Assignment group</th>
              <th className="text-left pr-3">Assigned to</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) &&
              data.map((incident, idx) => (
                <tr
                  className="hover:bg-gray-200 transition-colors duration-200"
                  key={`${incident.id_issue}-${idx}`}
                >
                  <td className="py-5 px-3">
                    <Link
                      href={`/incidents/${incident.id_issue}`}
                      className="text-blue-700 underline hover:text-blue-900"
                    >
                      {incident.id_issue}
                    </Link>
                  </td>
                  <td className="py-5 pr-3">1513.MX</td>
                  <td className="py-5 pr-3">{incident.short_description}</td>
                  <td className="py-5 pr-3">
                    {cutStringToSpecificLength(incident.description, 80)}
                  </td>
                  <td className="py-5 pr-3">Assigned</td>
                  <td className="py-5 pr-3"></td>
                  <td className="py-5 pr-3">
                    {incident.sys_created_on.toString()}
                  </td>
                  <td className="py-5 pr-3">{incident.reported_by}</td>
                  <td className="py-5 pr-3">
                    International-MeAtWalmart-Support
                  </td>
                  <td className="py-5 pr-3">{incident.assigned_to}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
