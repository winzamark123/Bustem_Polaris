import StatisticsHeader from './header';
import StatisticsInfo from './info';
import {
  BlockStack,
  Card,
} from '@shopify/polaris';

export default function StatisticsDashboard() {
  return (
    <Card>
      <BlockStack gap="400">
      <StatisticsHeader />
      <StatisticsInfo />
      </BlockStack>
    </Card>
  );
}