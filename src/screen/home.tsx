import { Button, Center, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { IncomingMessage } from "http";
import { useNavigate } from "react-router-dom";

const Box = styled(motion.div)`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
`;

const ImageVariants = {
    initial: {
        y: window.screen.availHeight,
        opacity: 0.1,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
    exit: {
        y: -window.screen.availHeight,
        opacity: 0.1,
    },
};

export default function Home() {
    const navigate = useNavigate();

    const images = [
        // require(`../resources/images/image1.jpg`),
        // require(`../resources/images/image2.jpg`),
        // require(`../resources/images/image3.jpg`),
        // require(`../resources/images/image4.jpg`),
        require(`../resources/images/test1.jpg`),
        require(`../resources/images/test2.jpg`),
        require(`../resources/images/test3.jpg`),
        require(`../resources/images/test4.jpg`),
    ];

    const [imageIndex, setImageIndex] = useState<number>(0);

    function updateImageIndex() {
        if (imageIndex >= 3) setImageIndex(0);
        else setImageIndex((prev) => prev + 1);
        return;
    }

    useEffect(() => {
        setTimeout(updateImageIndex, 5000);
    }, [imageIndex]);

    return (
        <>
            <Helmet>
                <title>My Flower</title>
            </Helmet>

            <Box>
                <AnimatePresence initial={false}>
                    {images.map((image, index) =>
                        index === imageIndex ? (
                            <Image
                                key={index}
                                src={image}
                                variants={ImageVariants}
                                initial="initial"
                                animate="visible"
                                exit="exit"
                                transition={{ type: "tween", duration: 2 }}
                                layout
                            />
                        ) : null
                    )}
                </AnimatePresence>

                <Center
                    w="180px"
                    h="50px"
                    border="1px solid white"
                    borderRadius="30px"
                    position="absolute"
                    top="70%"
                    left="0"
                    right="0"
                    mx="auto"
                    _hover={{
                        cursor: "pointer",
                        bgColor: "white",
                        color: "rgba(0, 0, 0, 0.7)",
                        transition: "all 0.2s linear",
                    }}
                    onClick={() => {
                        navigate("/shop");
                    }}
                >
                    <Text fontFamily={"Cormorant"} fontSize={"20px"}>
                        Go to Shop
                    </Text>
                </Center>
            </Box>
        </>
    );
}
