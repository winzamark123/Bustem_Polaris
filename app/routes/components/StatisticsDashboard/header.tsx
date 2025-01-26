import {
  InlineStack,
  Text,
  Button,
  Box,
} from '@shopify/polaris';

export default function StatisticsHeader(){
  return (
        <InlineStack align="space-between">
          <Text as="h3" variant="headingLg">Statistics</Text>
          <InlineStack gap="200" >
            <Box background="bg-fill-secondary" borderRadius="200" padding="100">
              <Button variant="primary" pressed>
                Monthly
              </Button>
              <Button variant="tertiary">All Time</Button>
            </Box>
          </InlineStack>
        </InlineStack>
  )
}