import { Flex } from "@aws-amplify/ui-react";
import Icon from "../Icon/Icon";
import NavBar from "../NavBar/NavBar";

export default function Header(): JSX.Element {
    return (
        <Flex>
            <Icon />
            <NavBar />
        </Flex>
    )
}