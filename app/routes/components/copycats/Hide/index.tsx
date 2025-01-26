import {
    BlockStack,
    Button,
    Card,
    InlineStack,
    Text,
    ButtonGroup,
    Icon,
  } from '@shopify/polaris';
  import { InfoIcon } from '@shopify/polaris-icons';
  
  interface CopycatHideProps {
    onAddManually?: () => void;
    onAddSocials?: () => void;
  }
  
  export default function CopycatHide({ onAddManually, onAddSocials }: CopycatHideProps): JSX.Element {
    return (
      <Card padding="400">
        <BlockStack gap="400" >
          <Text as="h2" variant="headingMd">Hide Results From</Text>
          
  
          <BlockStack gap="300">
            <InlineStack gap="400" align="space-between">
              <InlineStack gap="200" align="center">
                <Icon source={InfoIcon} />
                <Text as="p">Know about an infringer we missed?</Text>
              </InlineStack>
              <Button onClick={onAddManually}>Add Manually</Button>
            </InlineStack>
  
            <InlineStack gap="400" align="space-between">
              <InlineStack gap="200" align="center">
                <Icon source={InfoIcon} />
                <Text as="p">Add to whitelist to filter out false positives.</Text>
              </InlineStack>
              <Button onClick={onAddSocials}>Add Socials</Button>
            </InlineStack>
          </BlockStack>
        </BlockStack>
      </Card>
    );
  }