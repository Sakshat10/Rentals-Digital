import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

  import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Button from "../../shared/Button"

function HeroTabs() {
  return (
    <div>
    <Tabs defaultValue="Token" className="md:w-[350px] lg:w-[430px] w-[90vw]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Token">Token Purchase</TabsTrigger>
        <TabsTrigger value="Referral">Referral</TabsTrigger>
      </TabsList>

      <TabsContent value="Token">
        <Card>
          <CardHeader>
            <CardTitle>Token Purchase</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Enter the amount</Label>
              <Input id="username" defaultValue="0.00" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full border-2 border-custom-left">connect wallet</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="Referral">
        <Card>
          <CardHeader>
            <CardTitle>Referral</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Referal ID</Label>
              <Input id="username" defaultValue="random123.rentals" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full border-2 border-custom-left">connect wallet</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      </Tabs>
    </div>
   

  )
}

export default HeroTabs
