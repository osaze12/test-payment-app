import { Box, Divider, Stack, Text } from "@chakra-ui/react"

const list = [
  { key: "Subtotal", value: "₦2,497.00" },
  { key: "Estimated TAX", value: "₦119.64" },
  { key: "Promotional Code:", value: "₦-60.00", code: "ZAKXLM9A" },
]
const SPAN_STYLE = {
  marginLeft: "5px",
  color: "grey",
}
export const PaymentSummary = () => {
  return (
    <Box>
      <Divider />
      <Box py="20px">
        {list.map((data, id) => {
          return (
            <Stack
              key={id}
              direction={["column", "column", "row"]}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text m="10px" fontWeight="medium">
                {data.key}
                {data?.code && <span style={SPAN_STYLE}>{data.code}</span>}
              </Text>
              <Text fontWeight="bold">{data.value}</Text>
            </Stack>
          )
        })}
      </Box>

      <Divider />
    </Box>
  )
}
