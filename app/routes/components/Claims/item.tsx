import {
    Text,
    Box,
    InlineStack
} from '@shopify/polaris';

export default function ClaimsItem(){
    return (
        <main>
            <Box background="bg-fill-secondary" borderRadius="200" padding="200" minWidth="24px" minHeight="24px">
                <InlineStack align="space-between" gap="200" >
                    <Text as="span" variant="bodyMd" >ID</Text>
                    <Text as="span" variant="bodyMd" >Company</Text>
                    <Text as="span" variant="bodyMd" >Date</Text>
                    <Text as="span" variant="bodyMd" >Alleged Copycat</Text>
                    <Text as="span" variant="bodyMd" >Status</Text>
                </InlineStack>
            </Box>
        </main>
    )
}