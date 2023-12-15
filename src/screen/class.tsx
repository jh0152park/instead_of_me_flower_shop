import { Box, Center, Grid, HStack, VStack } from "@chakra-ui/react";
import Product from "../components/product";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import { useRecoilValue } from "recoil";
import { currentMode } from "../project_common";

export default function Class() {
    const isMobile = useRecoilValue(currentMode) === "mobile";
    const classData = [
        {
            iamge: require("../resources/images/class/hobby.jpg"),
            name: "Hobby Class",
        },
        {
            iamge: require("../resources/images/class/basic.jpg"),
            name: "Basic Class",
        },
        {
            iamge: require("../resources/images/class/florist.jpg"),
            name: "Florist Class",
        },
        {
            iamge: require("../resources/images/class/business.jpg"),
            name: "Business Class",
        },
    ];

    return (
        <>
            <Helmet>
                <title>Classes</title>
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
                <Grid
                    templateColumns={
                        isMobile ? "repeat(1, 1fr)" : "repeat(4, 1fr)"
                    }
                    gap="10px"
                >
                    {classData.map((data, index) => (
                        <Product
                            key={index}
                            product={data.name}
                            price={"가격문의"}
                            image={data.iamge}
                        />
                    ))}
                </Grid>
            </Center>

            <Footer />
        </>
    );
}
