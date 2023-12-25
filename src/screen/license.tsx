import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { license } from "../resources/ImageLicense";

export default function License() {
    let rawdata = license;
    let iamges: string[] = [];
    let profiles: string[] = [];
    let photographers: string[] = [];

    for (var i of rawdata.split("사진: ").slice(1)) {
        console.log(i.split('href="')[1].split('">')[0]);
        iamges.push(i.split('href="')[1].split('">')[0]);
        profiles.push(i.split('href="')[2].split('">')[0]);
        photographers.push(i.split('href="')[2].split('">')[1].split("<")[0]);
    }

    return (
        <VStack
            w="100%"
            minH="100vh"
            px="50px"
            py="200px"
            alignItems="flex-start"
            color="black"
            bgColor="white"
        >
            <Heading fontSize="30px" mb="50px">
                Images resources
            </Heading>
            {iamges.map((image, index) => (
                <VStack key={index}>
                    <HStack>
                        <Text
                            _hover={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                window.open(image);
                            }}
                        >
                            Image
                        </Text>
                        <span> by </span>
                        <Text
                            _hover={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={() => {
                                window.open(profiles[index]);
                            }}
                        >
                            {photographers[index]} of Unsplash
                        </Text>
                    </HStack>
                </VStack>
            ))}
        </VStack>
    );
}
