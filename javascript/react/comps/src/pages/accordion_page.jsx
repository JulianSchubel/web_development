import Accordion from "../components/Accordion/Accordion";

export function AccordionPage() {
    const items = [
        {
            id: "0ffb9914-679b-4f9a-8d92-d0e1220d2edb",
            label: "hello",
            content: "world"
        },
        {
            id: "2b81cfa4-789b-4b96-b307-cb2927de58e2",
            label: "hello",
            content: "world"
        },
        {
            id: "3afaaac6-fe54-429b-889c-069b68beee15",
            label: "hello",
            content: "world"
        }
    ]

    return (
        <div>
            <Accordion items={items}/>
        </div>
    );
}
