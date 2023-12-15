import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentMode } from "../../project_common";
import { go_to_top } from "../../utils/util";

interface IProps {
    image: string;
    name: string;
}

export default function Album({ image, name }: IProps) {
    const navigage = useNavigate();
    const [isHover, setIsHover] = useState<boolean>(false);
    const isMobile = useRecoilValue(currentMode) === "mobile";
    const size = isMobile ? "300px" : "410px";

    function toggleHover() {
        setIsHover((prev) => !prev);
    }

    return (
        <Box
            w={size}
            h={size}
            position="relative"
            overflow="hidden"
            boxSizing="border-box"
            onMouseLeave={toggleHover}
            onMouseOver={toggleHover}
            _hover={{
                cursor: "pointer",
            }}
            onClick={() => {
                go_to_top(0);
                navigage(`/${name.toLowerCase()}`);
            }}
        >
            <Image
                w="100%"
                h="100%"
                objectFit="cover"
                src={image}
                transform={isHover ? "scale(1.1)" : "scale(1)"}
                transition="all 0.2s linear"
            />

            <Center
                id="overlay"
                w="100%"
                h="100%"
                bgColor="rgba(0, 0, 0, 0.3)"
                position="absolute"
                top="0"
                left="0"
                opacity={isHover ? 0 : 1}
            >
                <Text fontSize="18px" fontFamily="Cormorant">
                    {name}
                </Text>
            </Center>
        </Box>
    );
}
