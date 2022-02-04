import { Stack } from "@chakra-ui/react"
import { AddCard } from "./components/AddCard"
import { CallToAction } from "./components/CallToAction"
import { Nav } from "./components/Nav"
import { PaymentSummary } from "./components/PaymentSummary"

function App() {
  return (
    <Stack spacing="40px" px={["10px", "50px"]} pb="20px">
      <Nav />
      <AddCard />
      <PaymentSummary />
      <CallToAction />
    </Stack>
  )
}

export default App
