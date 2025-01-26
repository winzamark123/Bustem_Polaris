import {
    Text,
    Box,
    InlineStack
} from '@shopify/polaris';

const claimsData = [
    "ID",
    "Company",
    "Date",
    "Alleged Copycat",
    "Status"
]

export default function ClaimsItem(){
    return (
        <main>
            <Box background="bg-fill-secondary" borderRadius="200" padding="200" minWidth="24px" minHeight="24px">
                <InlineStack align="space-between" gap="200" >
                    {claimsData.map((item, index) => (
                        <Text as="span" variant="bodyMd" key={index}>{item}</Text>
                    ))}
                </InlineStack>
            </Box>
        </main>
    )
}