import { Avatar, Box, Divider, Stack, Text } from "@chakra-ui/react"
import avatar from "../assets/avatar.png"

const NAV_LIST = ["TRIPS", "RECENTLY VIEWED", "BOOKINGS"]

export const Nav = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        py="40px"
        spacing={["15px", "60px"]} //for mobile responsiveness
        alignItems="center"
      >
        {NAV_LIST.map((data, id) => {
          return (
            <Text
              color="grey"
              fontWeight="bold"
              key={id}
              fontSize={[".9em", "1em"]} //for mobile responsiveness
            >
              {data}
            </Text>
          )
        })}
        <Avatar src={avatar} alt="avatar" />
      </Stack>
      <Divider />
    </Box>
  )
}
