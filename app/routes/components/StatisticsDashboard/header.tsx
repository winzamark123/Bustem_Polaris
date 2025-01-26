import {
  InlineStack,
  Text,
  Button,
  Box,
} from '@shopify/polaris';
import { useState } from 'react';

export default function StatisticsHeader(){
  const [activeView, setActiveView] = useState<'monthly' | 'allTime'>('monthly');

  return (
    <InlineStack align="space-between">
      <Text as="h3" variant="headingLg">Statistics</Text>
      <InlineStack gap="200">
        <Box background="bg-fill-secondary" borderRadius="200" padding="100">
          <Button
            variant={activeView === 'monthly' ? 'primary' : 'tertiary'}
            onClick={() => setActiveView('monthly')}
          >
            Monthly
          </Button>
          <Button
            variant={activeView === 'allTime' ? 'primary' : 'tertiary'}
            onClick={() => setActiveView('allTime')}
          >
            All Time
          </Button>
        </Box>
      </InlineStack>
    </InlineStack>
  )
}