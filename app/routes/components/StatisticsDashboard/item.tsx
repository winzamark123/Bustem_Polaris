import {
    BlockStack,
    Text,
    Box,
    Card,
  } from '@shopify/polaris';
  
  interface StatisticsItemProps {
    title: string;
    value: string;
    subtitle: string;
  }
  
  export default function StatisticsItem({ title, value, subtitle }: StatisticsItemProps) {
    return (
        <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingSm" tone="subdued">
            {title}
          </Text>
          <Text as="h3" variant="headingXl">{value}</Text>
          <Box background="bg-fill-success-secondary" borderRadius="300" padding="200">
            <Text as="p" variant="bodySm" tone="success">
              {subtitle}
            </Text>
          </Box>
        </BlockStack>
      </Card>
    );
  }