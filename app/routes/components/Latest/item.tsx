import {
    BlockStack,
    Text,
    Box,
    Card,
  } from '@shopify/polaris';
  
  interface LatestItemProps {
    title: string;
    value: string;
    subtitle: string;
  }
  
  export default function LatestItem({ title, value, subtitle }: LatestItemProps) {
    return (
        <Card>
        <BlockStack gap="200">
          <Text as="h3" variant="headingSm" tone="subdued">
            {title}
          </Text>
          <Text as="h3" variant="headingXl">{value}</Text>
          <Box background="bg-fill-success-secondary" borderRadius="300" padding="200">
            <BlockStack gap="200" align="center">
              <Text as="p" variant="bodySm" tone="success" alignment="center">
                {subtitle}
              </Text>
            </BlockStack>
          </Box>
        </BlockStack>
      </Card>
    );
  }