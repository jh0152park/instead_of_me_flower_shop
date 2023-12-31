import { Center, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { go_to_top } from "../utils/util";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const basePath = [
        "/",
        "/instead_of_me_flower_shop",
        "/instead_of_me_flower_shop/",
    ];

    console.log(location.pathname);
    console.log(basePath.includes(location.pathname));

    return (
        <Center
            w="100%"
            position="fixed"
            pt="50px"
            pb="20px"
            zIndex="99"
            bgColor={
                basePath.includes(location.pathname) ? "rgba(0,0,0,0)" : "white"
            }
        >
            <Text
                fontFamily={"Cormorant"}
                fontSize={"50px"}
                onClick={() => {
                    if (basePath.includes(location.pathname)) go_to_top(0);
                    else navigate("/");
                }}
                _hover={{
                    cursor: "pointer",
                    color: basePath.includes(location.pathname)
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgba(0, 0, 0, 0.5)",
                    transition: "color 0.2s linear",
                }}
                color={basePath.includes(location.pathname) ? "white" : "black"}
            >
                My Flower
            </Text>
        </Center>
    );
}
