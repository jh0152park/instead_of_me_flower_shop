import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import Album from "../components/shop/album";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";

export default function Shop() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Shop</title>
            </Helmet>

            <Center w="100%" minH="100vh" bgColor="white">
                {isMobile ? (
                    <VStack
                        w="100%"
                        justifyContent="space-between"
                        px="95px"
                        my="200px"
                    >
                        <Album
                            name="Class"
                            image={require("../resources/images/class.jpg")}
                        />
                        <Album
                            name="Order"
                            image={require("../resources/images/order.jpg")}
                        />
                        <Album
                            name="Directing"
                            image={require("../resources/images/directing.jpg")}
                        />
                    </VStack>
                ) : (
                    <HStack w="100%" justifyContent="space-between" px="200px">
                        <Album
                            name="Class"
                            image={require("../resources/images/class.jpg")}
                        />
                        <Album
                            name="Order"
                            image={require("../resources/images/order.jpg")}
                        />
                        <Album
                            name="Directing"
                            image={require("../resources/images/directing.jpg")}
                        />
                    </HStack>
                )}
            </Center>

            <Footer />
        </>
    );
}
