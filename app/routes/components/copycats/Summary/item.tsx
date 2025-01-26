import {
    BlockStack,
    Text,
    Box,
    Card,
    InlineStack,
    Icon,
    IconSource,
    Badge,
  } from '@shopify/polaris';

  interface CopycatSummaryItemProps {
    title: string;
    value: string;
    icon: React.ElementType;
    tone?: "critical";
  }
  
  export default function CopycatSummaryItem({ 
    title, 
    value, 
    icon,
    tone,
  }: CopycatSummaryItemProps) {
    return (
        <Card>
            <BlockStack gap="200">
              <InlineStack gap="300" align="start" blockAlign="center">
                <Box background="bg-fill-secondary" borderRadius="200" padding="100">
                  <Icon source={icon as unknown as IconSource} tone={tone} />
                </Box>
                <Text as="h3" variant="headingMd">{title}</Text>
              </InlineStack>
              <InlineStack gap="300" align="start" blockAlign="center">
                <Text as="h3" variant="headingLg">{value}</Text>
                {tone && <Badge tone={tone}>03/21/25</Badge>}
              </InlineStack>
            </BlockStack>
      </Card>
    );
  }