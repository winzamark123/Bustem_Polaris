import {
  Page,
  BlockStack
} from "@shopify/polaris";
import Summary from "./components/copycats/Summary";
import Hide from "./components/copycats/Hide";
import Demo from "./components/demo";
import Search from "./components/copycats/Search";

export default function CopycatsPage() {
  return (
    <Page>
      <BlockStack gap="400">
        <Search />
        <Summary />
        <Hide />
        <Demo />
      </BlockStack>
    </Page>
  );
}
