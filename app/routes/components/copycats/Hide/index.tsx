import {
    BlockStack,
    Button,
    Card,
    InlineStack,
    Text,
    Icon,
    InlineGrid,
    Box,
    Modal,
    Form,
    TextField,
} from '@shopify/polaris';
import { InfoIcon } from '@shopify/polaris-icons';
import { useState } from 'react';

const hideOptions = [
    {
        id: 'manually',
        description: "Know about an infringer we missed?",
        button: "Add Manually",
        title: "Add Infringer Manually",
    },
    {
        id: 'socials',
        description: "Add to whitelist to filter out false positives.",
        button: "Add Socials",
        title: "Add Social Media Accounts",
    }
];

export default function CopycatHide(): JSX.Element {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [url, setUrl] = useState('');

    const handleModalClose = () => {
        setActiveModal(null);
        setUrl('');
    };

    const handleSubmit = () => {
        // Handle the submission logic here
        console.log('Submitted URL:', url);
        handleModalClose();
    };

    return (
        <>
            <Card padding="400">
                <BlockStack gap="400">
                    <Text as="h2" variant="headingMd">Hide Results From</Text>
                    <InlineStack gap="400" align="space-between">
                        <Button>Other</Button>
                    </InlineStack>
                    <InlineGrid columns={2}>
                        {hideOptions.map((option) => (
                            <Card key={option.id} background="bg-fill-secondary" padding="300">
                                <InlineStack gap="400" align="space-between">
                                    <InlineStack gap="200" align="start" blockAlign="center">
                                        <Box>
                                            <Icon source={InfoIcon} />
                                        </Box>
                                        <Text as="p" variant="bodyMd">{option.description}</Text>
                                    </InlineStack>
                                    <Button onClick={() => setActiveModal(option.id)}>
                                        {option.button}
                                    </Button>
                                </InlineStack>
                            </Card>
                        ))}
                    </InlineGrid>
                </BlockStack>
            </Card>

            {/* Add Manually Modal */}
            <Modal
                open={activeModal === 'manually'}
                onClose={handleModalClose}
                title="Add Infringer Manually"
                primaryAction={{
                    content: 'Add',
                    onAction: handleSubmit,
                }}
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: handleModalClose,
                    },
                ]}
            >
                <Modal.Section>
                    <Form onSubmit={handleSubmit}>
                        <BlockStack gap="400">
                            <TextField
                                label="Store URL"
                                value={url}
                                onChange={setUrl}
                                autoComplete="off"
                                placeholder="Enter store URL"
                            />
                        </BlockStack>
                    </Form>
                </Modal.Section>
            </Modal>

            {/* Add Socials Modal */}
            <Modal
                open={activeModal === 'socials'}
                onClose={handleModalClose}
                title="Add Social Media Accounts"
                primaryAction={{
                    content: 'Add',
                    onAction: handleSubmit,
                }}
                secondaryActions={[
                    {
                        content: 'Cancel',
                        onAction: handleModalClose,
                    },
                ]}
            >
                <Modal.Section>
                    <Form onSubmit={handleSubmit}>
                        <BlockStack gap="400">
                            <TextField
                                label="Social Media URL"
                                value={url}
                                onChange={setUrl}
                                autoComplete="off"
                                placeholder="Enter social media URL"
                            />
                        </BlockStack>
                    </Form>
                </Modal.Section>
            </Modal>
        </>
    );
}