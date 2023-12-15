import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";

export default function Directing() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Directing</title>
            </Helmet>
            <Center
                bgColor="white"
                color="black"
                w="100%"
                minH="100vh"
                py="150px"
                // pb="100px"
                // px="95px"
            >
                {isMobile ? (
                    <VStack justifyContent="flex-start" w="100%">
                        <Product
                            product="공간장식"
                            price={"문의필요"}
                            image={require("../resources/images/directing/space.jpg")}
                        />
                    </VStack>
                ) : (
                    <HStack>
                        <Product
                            product="공간장식"
                            price={"문의필요"}
                            image={require("../resources/images/directing/space.jpg")}
                        />
                    </HStack>
                )}
            </Center>

            <Footer />
        </>
    );
}
