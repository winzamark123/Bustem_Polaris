import {
    InlineStack,
    Text,
  } from '@shopify/polaris';
  
  export default function CopycatSummaryHeader(){
  
    return (
      <InlineStack align="space-between">
        <Text as="h3" variant="headingLg">Analytics Summary</Text>
      </InlineStack>
    )
  }