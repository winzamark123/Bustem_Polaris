import {
    BlockStack,
    Button,
    Card,
    InlineStack,
    Text,
    ButtonGroup,
    Icon,
    InlineGrid,
    Box,
  } from '@shopify/polaris';
  import { InfoIcon } from '@shopify/polaris-icons';

  const hideOptions = [
    {
        description: "Know about an infringer we missed?",
        button: "Add Manually",
    },
    {
        description: "Add to whitelist to filter out false positives.",
        button: "Add Socials",
    }
  ]
  
  
  export default function CopycatHide(): JSX.Element {
    return (
      <Card padding="400">
        <BlockStack gap="400" >
        <Text as="h2" variant="headingMd">Hide Results From</Text>
            <InlineStack gap="400" align="space-between">
                <Button>Other</Button>
            </InlineStack>
            <InlineGrid columns={2}>
                {hideOptions.map((option, index) => (
                    <Card key={index} background="bg-fill-secondary">
                        <InlineStack gap="400" align="space-between">
                            <InlineStack gap="200" align="start" blockAlign="center">
                                <Box>
                                    <Icon source={InfoIcon} />
                                </Box>
                                <Text as="h3" variant="headingMd">{option.description}</Text>
                            </InlineStack>
                            <Button>{option.button}</Button>
                        </InlineStack>
                    </Card>
                ))}
            </InlineGrid>
          
  
        </BlockStack>
      </Card>
    );
  }