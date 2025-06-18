import axios from 'axios';
import { Incident } from '@/types/incident';

export async function getIncident(id_issue: string): Promise<Incident | null> {
  try {
    const url =
      'https://sn-poc-ai-service-08ff59345e4e.herokuapp.com/api/incidents';
    const response = await axios.get(url, {
      params: { id: id_issue },
    });

    const data = response.data;

    if (!Array.isArray(data) || data.length === 0) {
      return null;
    }

    return data[0];
  } catch (error) {
    console.error('Error fetching incident:', error);
    return null;
  }
}
