import {
    BlockStack,
    Text,
    Box,
    Card,
    InlineStack,
    Icon,
  } from '@shopify/polaris';
  import { PersonFilledIcon } from '@shopify/polaris-icons';

  interface CopycatSummaryItemProps {
    title: string;
    value: string;
    subtitle: string;
  }
  
  export default function CopycatSummaryItem({ title, value, subtitle }: CopycatSummaryItemProps) {
    return (
        <Card>
            <BlockStack gap="200">
          <InlineStack gap="300" align="start" blockAlign="center">
            <Box background="bg-fill-secondary" borderRadius="200" padding="100">
              <Icon source={PersonFilledIcon} />
            </Box>
            <Text as="h3" variant="headingLg">{title}</Text>
          </InlineStack>
                <Text as="h3" variant="headingXl">{value}</Text>
            </BlockStack>
      </Card>
    );
  }