import {
  BlockStack,
  Text,
  Box,
  Card,
  InlineStack,
  Icon,
  CalloutCard,
} from '@shopify/polaris';

import type { IconSource } from '@shopify/polaris';

interface LatestItemProps {
  title: string;
  value: string;
  subtitle: string;
}

export default function LatestItem({ title, value, subtitle }: LatestItemProps) {
  return (
      <CalloutCard
        title={title}
        illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
        primaryAction={{
          content: subtitle,
          url: '#',
        }}
      >
        <p>{value}</p>
      </CalloutCard>
  );
}
