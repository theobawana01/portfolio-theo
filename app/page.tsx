import { getPortfolioData } from '@/lib/data';
import ClientPage from './ClientPage';

export default function Home() {
  const data = getPortfolioData();
  return <ClientPage data={data} />;
}
