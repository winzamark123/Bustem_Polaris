import { InlineGrid } from '@shopify/polaris';
import StatisticsInfoItem from './info_item';

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

export default function StatisticsInfo() {
  return (
    <InlineGrid columns="4" gap="400">
      {statisticsData.map((item, index) => (
        <StatisticsInfoItem
          key={index}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
        />
      ))}
    </InlineGrid>
  );
}