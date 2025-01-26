import {
  Page,
  BlockStack
} from "@shopify/polaris";
import Summary from "./components/copycats/Summary";
import Hide from "./components/copycats/Hide";
import Demo from "./components/demo";
import { TitleBar } from "@shopify/app-bridge-react";

export default function CopycatsPage() {
  return (
    <Page>
      <BlockStack gap="400">
        <TitleBar title="New Copycats" />
        <Summary />
        <Hide />
        <Demo />
      </BlockStack>
    </Page>
  );
}
