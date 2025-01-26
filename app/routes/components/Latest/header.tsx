import {
    InlineStack,
    Text,
  } from '@shopify/polaris';
  
  export default function LatestHeader(){
    return (
          <InlineStack align="space-between">
            <Text as="h3" variant="headingLg">The latest</Text>
          </InlineStack>
    )
  }