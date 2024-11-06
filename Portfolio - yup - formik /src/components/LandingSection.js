import React from "react";
import { Avatar, Heading, HStack, Box, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <HStack>
      <Avatar size="large" name='pete' src='https://i.pravatar.cc/150?img=7'></Avatar>
      <Box pl="3">
        <Heading size="2xl">{greeting}</Heading>
        <Text fontSize="2xl">{bio1 + " " + bio2}</Text>
      </Box>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
