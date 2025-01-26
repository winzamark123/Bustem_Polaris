import {
    InlineStack,
    Text,
    Box
  } from '@shopify/polaris';
  
  export default function ClaimsHeader(){
    return (
          <InlineStack align="start" gap="200">
            <Text as="h3" variant="headingLg">Claims</Text>
            <Box background="bg-fill-brand" borderRadius="500" 
            padding="100" minWidth="24px" minHeight="24px">
              <Text as="span" variant="bodyMd" tone="text-inverse" alignment="center">0</Text>
            </Box>
          </InlineStack>
    )
  }