import InfoCard from '@ui/InfoCard';
import CopycatSummaryHeader from './header';
import CopycatSummaryItem from './item';

const summaryData = [
  {
    title: 'Total Number of Infringements',
    value: '0',
  },
  {
    title: 'Combined Traffic',
    value: 'Coming Soon',
  },
  {
    title: 'Estimated Loss',
    value: 'Coming Soon',
  },
];

export default function CopycatSummary() {
  return (
    <main>
      <InfoCard header={<CopycatSummaryHeader />} items={summaryData} ItemLayout={CopycatSummaryItem} />
    </main>
  );
}
