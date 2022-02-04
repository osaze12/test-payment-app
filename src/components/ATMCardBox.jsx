import { Box, Image, Stack, Text } from "@chakra-ui/react"
import eletr from "../assets/card-ele.png"
import masterIcon from "../assets/master.png"

export const ATMCARDBOX = ({
  cardNumber,
  expirationDate,
  ownersName = "John Doe",
}) => {
  return (
    <Box
      position="relative"
      borderRadius="4px"
      color="#fff"
      fontSize=".8em"
      w={["300px", "350px"]} //for mobile responsiveness
      h="250px"
      bg={
        "linear-gradient(90deg, rgba(214,87,75,1) 0%, rgba(97,99,198,1) 100%)"
      }
    >
      <Stack position="absolute" left="25px" top="20px">
        <Text>CARD NUMBER</Text>
        <Text letterSpacing="3px">{cardNumber}</Text>
      </Stack>

      <Stack position="absolute" bottom="25px" left="25px">
        <Text>EXPIRATION DATE</Text>
        <Text>{expirationDate}</Text>
        <Text>{ownersName}</Text>
      </Stack>

      <Image w="70px" position="absolute" top="80px" src={eletr} alt="card" />
      <Image
        position="absolute"
        top="200px"
        right="70px"
        src={masterIcon}
        alt="master icon"
      />
    </Box>
  )
}
