import { Box, Button, Image, Input, Radio, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { ATMCARDBOX } from "./ATMCardBox"
import paymentProcessor from "../assets/payment-org.png"

const INPUT_STYLE = {
  bg: "#f3f3f3",
  borderRadius: "2px",
  color: "#000",
  border: "2px solid #e3e3e3",
  type: "number",

  _placeholder: { color: "#383838" },
  _focus: { border: "none" },
  outline: "none",
}
const SM = {
  fontSize: ".8em",
}

export const AddCard = () => {
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")

  const cardDetails = { cardNumber, expirationDate }
  return (
    <Stack
      direction={["column", "column", "column", "row"]} //for mobile responsiveness
      justifyContent="space-between"
      alignItems="center"
      my="30px"
      spacing="20px"
    >
      <Box>
        <ATMCARDBOX {...cardDetails} />
      </Box>
      <Stack spacing="20px">
        <Image
          alignSelf={["center", "flex-end"]}
          width="150px"
          src={paymentProcessor}
          alt="payment processor"
        />
        <Stack
          direction={["column", "column", "column", "row"]} //for mobile responsiveness
          alignItems="center"
          spacing="20px"
        >
          <Stack spacing="20px">
            <Stack>
              <Text {...SM}>Credit card number</Text>
              <Input
                {...INPUT_STYLE}
                placeholder="Enter card number"
                onChange={e => setCardNumber(e.target.value)}
              />
            </Stack>
            <Stack>
              <Text {...SM}>security code</Text>
              <Input {...INPUT_STYLE} placeholder="Enter security code" />
            </Stack>
          </Stack>
          <Stack spacing="20px">
            <Stack>
              <Text {...SM}>Expiration date</Text>
              <Input
                {...INPUT_STYLE}
                type="text"
                placeholder="Enter expiration date"
                onChange={e => setExpirationDate(e.target.value)}
              />
            </Stack>
            <Stack>
              <Text {...SM}>Postal code</Text>
              <Input {...INPUT_STYLE} placeholder="Enter postal code" />
            </Stack>
          </Stack>
        </Stack>
        <Radio isChecked value={true}>
          Use this card for next time purchase
        </Radio>

        <Button borderRadius="none" colorScheme="blue">
          Add card
        </Button>
      </Stack>
    </Stack>
  )
}
