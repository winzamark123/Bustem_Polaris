import StatisticsHeader from './header';
import InfoCard from '../ui/InfoCard';

const statisticsData = [
  {
    title: 'Total Savings',
    value: '$0',
    subtitle: '+$0 Saved',
  },
  {
    title: 'Average Competition',
    value: '—',
    subtitle: '—% less competition',
  },
  {
    title: 'Success Rate',
    value: '—',
    subtitle: '—% save rate',
  },
  {
    title: 'Total Claims',
    value: '0',
    subtitle: '0 Total Claims',
  },
];

export default function StatisticsDashboard() {
  return (
    <main>
      <InfoCard header={<StatisticsHeader />} items={statisticsData} />
    </main>
  );
}