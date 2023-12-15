import { Center, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../utils/util";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Center
            w="100%"
            position="fixed"
            pt="50px"
            pb="20px"
            zIndex="99"
            bgColor={location.pathname === "/" ? "rgba(0,0,0,0)" : "white"}
        >
            <Text
                fontFamily={"Cormorant"}
                fontSize={"50px"}
                onClick={() => {
                    if (location.pathname === "/") go_to_top(0);
                    else navigate("/");
                }}
                _hover={{
                    cursor: "pointer",
                    color:
                        location.pathname === "/"
                            ? "rgba(255, 255, 255, 0.5)"
                            : "rgba(0, 0, 0, 0.5)",
                    transition: "color 0.2s linear",
                }}
                color={location.pathname === "/" ? "white" : "black"}
            >
                My Flower
            </Text>
        </Center>
    );
}
