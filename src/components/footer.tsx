import { Center, HStack, Text, VStack } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
    return (
        <Center w="100%" h="100px" bgColor="white" color="black">
            <VStack>
                <HStack>
                    <BsInstagram />
                    <Text>myflowers</Text>
                </HStack>
                <HStack>
                    <FiPhone />
                    <Text>010-2345-6789</Text>
                </HStack>
            </VStack>
        </Center>
    );
}
