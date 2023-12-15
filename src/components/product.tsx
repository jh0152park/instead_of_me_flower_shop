import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";

interface IProps {
    product: string;
    price: number | string;
    image: string;
}

export default function Product({ product, price, image }: IProps) {
    const [isHover, setIsHover] = useState<boolean>(false);
    const isMobile = useRecoilValue(currentMode) === "mobile";
    const size = isMobile ? "300px" : "410px";

    function toggleHover() {
        setIsHover((prev) => !prev);
    }

    return (
        <VStack>
            <Box
                w={size}
                h={size}
                _hover={{
                    cursor: "pointer",
                }}
                onMouseLeave={toggleHover}
                onMouseOver={toggleHover}
                position="relative"
            >
                <Image w="100%" h="100%" objectFit="cover" src={image} />
                <Box
                    w="100%"
                    h="100%"
                    position="absolute"
                    top="0"
                    left="0"
                    bgColor="rgba(255, 255, 255, 0.7)"
                    opacity={isHover ? 1 : 0}
                    transition="all 0.2s linear"
                />
            </Box>
            <Center w="410px" h="100px">
                <VStack>
                    <Text fontFamily={"Cormorant"} fontSize={"20px"}>
                        {product}
                    </Text>
                    <Text fontFamily={"Cormorant"} fontSize={"15px"}>
                        {typeof price === "number"
                            ? `${price.toLocaleString("ko-KR")} 원`
                            : price}
                    </Text>
                </VStack>
            </Center>
        </VStack>
    );
}
