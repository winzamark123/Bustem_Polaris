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
    <Card>
      <InlineStack gap="200" align="space-between">
        <BlockStack gap="400">
          <InlineStack gap="200">
            <Box  borderRadius="200" 
              padding="100" minWidth="24px" minHeight="24px">
                <Icon source={PersonFilledIcon} />
            </Box>
            <Text as="h3" variant="headingLg">{title}</Text>
          </InlineStack>
          <Text as="p">{description}</Text>
        </BlockStack>
        <InlineStack align="center" blockAlign="center">
          <Box background="bg-fill-secondary" borderRadius="200" 
            padding="100" minWidth="24px" minHeight="24px">
            <Icon source={ArrowRightIcon} />
          </Box>
        </InlineStack>
      </InlineStack>
    </Card>
  );
}