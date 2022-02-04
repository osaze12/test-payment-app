import { Button, Stack, Text } from "@chakra-ui/react"

export const CallToAction = () => {
  return (
    <Stack
      direction={["column", "column", "row"]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Button borderRadius="none" colorScheme="blue">
        Complete payment
      </Button>
      <Text fontWeight="bold" fontSize="1.2em">
        TOTAL:₦2556.64
      </Text>
    </Stack>
  )
}
