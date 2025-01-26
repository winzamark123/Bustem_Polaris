import { BlockStack, Box, Card, Icon, InlineStack, Text } from '@shopify/polaris';
import {
  PersonFilledIcon,
  ArrowRightIcon
} from '@shopify/polaris-icons';

interface CTAButtonProps {
    title: string;
    description: string;

}

export default function CTAButton({ title, description }: CTAButtonProps) {
  return (
    <Card padding="600">
      <InlineStack gap="300" align="space-between">
        <BlockStack gap="200">
          <InlineStack gap="300" align="start" blockAlign="center">
            <Box background="bg-fill-secondary" borderRadius="200" padding="100">
              <Icon source={PersonFilledIcon} />
            </Box>
            <Text as="h3" variant="headingLg">{title}</Text>
          </InlineStack>
          <InlineStack gap="200" align="space-between">
            <Text as="p" >{description}</Text>
            <InlineStack align="center" blockAlign="center">
            </InlineStack>
          </InlineStack>
        </BlockStack>
        <BlockStack align="center">
          <Box background="bg-fill-secondary" borderRadius="200" padding="200" 
          minWidth="32px" minHeight="32px">
            <Icon source={ArrowRightIcon} />
          </Box>
        </BlockStack>
      </InlineStack>
    </Card>
  );
}