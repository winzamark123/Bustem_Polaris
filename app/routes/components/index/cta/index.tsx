import { InlineGrid } from "@shopify/polaris";
import CTAButton from "./CTAButton";

const buttonData = [
    {
        title: "Personal Investigator",
        description: "Hire an OSINT expert to investigate infringers",
    },
    {
        title: "Done for you DMCA",
        description: "Our team handles everything for you, start to finish",
    },
]
export default function CTAButton_Page() {
    return (
        <InlineGrid gap="200" columns={2}>
            {buttonData.map((button) => (
                <CTAButton title={button.title} description={button.description} />
            ))}
        </InlineGrid>
    )
}