import {
    InlineStack,
    Text,
    Icon,
  } from '@shopify/polaris';
  import { InfoIcon } from '@shopify/polaris-icons';
  export default function CopycatSummaryHeader(){
  
    return (
      <InlineStack align="space-between">
        <InlineStack gap="200">
            <Icon source={InfoIcon} />
            <Text as="h3" variant="headingLg">Analytics Summary</Text>
        </InlineStack>
      </InlineStack>
    )
  }