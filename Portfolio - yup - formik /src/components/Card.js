import { Heading, Image, Text, VStack, Link, Flex, Spacer} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return <VStack bg="white" borderRadius="md">
    <Image borderRadius="md" src={imageSrc}></Image>
    <Flex p="2" flexDirection="column">
      <Heading mb="2" color="black" size="xs">{title}</Heading>
      <Text fontSize='xs' color="gray.500">{description}</Text>
      <Link fontSize="xs" color="black" href="#">See more <FontAwesomeIcon size="1x" icon={faArrowRight} /></Link>
    </Flex>
  </VStack>;
};

export default Card;
