import { BlockStack, Card, InlineGrid, Box } from '@shopify/polaris';
import InfoCardItem from './info_item';
interface InfoCardProps {
  header: React.ReactNode;
  items: any[];
  ItemLayout?: React.ComponentType<any>;
  children?: React.ReactNode;
}

export default function InfoCard({ header, items, ItemLayout = InfoCardItem, children }: InfoCardProps) {
  return (
    <Card>
      <BlockStack gap="400">
        {header}
        {items && items.length > 0 && (
          <InlineGrid columns={items.length} gap="400">
            {items.map((item, index) => (
              <Box key={index}>
                <ItemLayout {...item} />
              </Box>
            ))}
          </InlineGrid>
        )}
        {children}
      </BlockStack>
    </Card>
  );
}