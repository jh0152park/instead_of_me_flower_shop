import { Center, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Not found / Instead of me</title>
            </Helmet>
            <Center
                w="100%"
                h="100vh"
                background="linear-gradient(180deg, #de63de, #c9c7c7)"
                color="black"
            >
                <VStack>
                    <Heading fontSize="60px" mt="-200px">
                        404 ERROR
                    </Heading>
                    <Heading>Opps, something went wrong 😭</Heading>
                    <Heading
                        mt="100px"
                        _hover={{
                            cursor: "pointer",
                            color: "whitesmoke",
                            transition: "all 0.2s ease-in-out",
                        }}
                        onClick={() => {
                            navigate("/");
                        }}
                    >
                        Go to Home
                    </Heading>
                </VStack>
            </Center>
        </>
    );
}
