import {
  Page,
  BlockStack
} from "@shopify/polaris";
import Summary from "./components/copycats/Summary";
import Hide from "./components/copycats/Hide";
import { TitleBar } from "@shopify/app-bridge-react";

export default function CopycatsPage() {
  return (
    <Page>
      <BlockStack gap="400">
        <TitleBar title="New Copycats" />
        <Summary />
        <Hide />
      </BlockStack>
    </Page>
  );
}
