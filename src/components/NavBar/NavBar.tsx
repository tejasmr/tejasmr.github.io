import { TabItem, Tabs } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export default function NavBar(): JSX.Element {
    return (
        <Tabs>
            <TabItem title="Home">Home Content</TabItem>
            <TabItem title="Education">Education content</TabItem>
        </Tabs>
    );
}