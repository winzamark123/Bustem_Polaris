import CopycatSummaryHeader from './header';
import CopycatSummaryItem from './item';
import { BlockStack, Box, Card, InlineGrid } from '@shopify/polaris';
import { AlertTriangleIcon, HashtagIcon, PageIcon  } from '@shopify/polaris-icons';

const summaryData = [
  {
    title: 'Total Number of Infringements',
    value: '0',
    icon: PageIcon,
  },
  {
    title: 'Combined Traffic',
    value: 'Coming Soon',
    icon: HashtagIcon,
  },
  {
    title: 'Estimated Loss',
    value: 'Coming Soon',
    icon: AlertTriangleIcon,
    warning: true,
  },
];

export default function CopycatSummary() {
  return (
    <main>
    <Card>
      <BlockStack gap="400">
        <CopycatSummaryHeader />
        {summaryData && summaryData.length > 0 && (
          <InlineGrid columns={summaryData.length} gap="400">
            {summaryData.map((item, index) => (
              <Box key={index}>
                <CopycatSummaryItem 
                  {...item} 
                  tone={item.warning ? "critical" : undefined}
                        />
              </Box>
            ))}
          </InlineGrid>
        )}
      </BlockStack>
    </Card>
    </main>
  );
}
