import { BlockStack, Card, InlineGrid } from '@shopify/polaris';
import InfoCardItem from './info_item';

interface InfoCardItemProps{
  title: string;
  value: string;
  subtitle: string;
}

interface InfoCardProps {
  header: React.ReactNode;
  items: InfoCardItemProps[];
  children?: React.ReactNode;
}


export default function InfoCard({ header, items, children }: InfoCardProps) {
  return (
    <Card>
      <BlockStack gap="400">
        {header}
        {items && items.length > 0 && (
          <InlineGrid columns={items.length} gap="400">
            {items.map((item, index) => (
              <InfoCardItem
                key={index}
                title={item.title}
                value={item.value}
                subtitle={item.subtitle}
              />
            ))}
          </InlineGrid>
        )}
        {children}
      </BlockStack>
    </Card>
  );
}