import { Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LicenseFooter() {
    const navigation = useNavigate();

    return (
        <Center w="100%" h="100px">
            <Text
                fontSize="12px"
                color="rgba(255, 255, 255, 0.2)"
                _hover={{
                    cursor: "pointer",
                    color: "rgba(255, 255, 255, 0.5)",
                }}
                transition="all 0.2s linear"
                onClick={() => {
                    navigation("/license");
                }}
            >
                Images license
            </Text>
        </Center>
    );
}
