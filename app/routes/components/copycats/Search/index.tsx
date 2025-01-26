import { Box, Button, Card, Icon, InlineStack, TextField } from '@shopify/polaris';
import { LinkIcon, ArrowRightIcon } from '@shopify/polaris-icons';
import { useState } from 'react';

interface StoreInputProps {
  onSubmit?: (url: string) => void;
}

export default function StoreInput({ onSubmit }: StoreInputProps): JSX.Element {
  const [url, setUrl] = useState('');

  return (
    <Card padding="400">
        <InlineStack gap="400" align="start" blockAlign="center">
        <div style={{ flex: 1 }}>
            <TextField
            label=""
            value={url}
            onChange={setUrl}
            autoComplete="off"
            prefix={<Icon source={LinkIcon} />}
            placeholder="newsite.com"
            monospaced
            />
        </div>
            <InlineStack>
                <Button
                    variant="primary"
                    onClick={() => onSubmit?.(url)}
            >
                Try New Store?
                </Button>
            </InlineStack>
        </InlineStack>
    </Card>
  );
}