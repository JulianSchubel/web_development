import {Button} from "../components/Button/Button"

export function ButtonPage() {
    return (
        <div>
            <Button primary rounded>Button</Button>
            <Button secondary icon="bell">Button</Button>
            <Button success icon="save">Button</Button>
            <Button warning icon="download">Button</Button>
            <Button danger>Button</Button>
        </div>
    );
}
