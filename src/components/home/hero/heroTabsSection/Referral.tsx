import Button from "@/components/shared/Button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Referral() {
  return (
    <div>
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
            <Button className="w-full border-2 border-custom-left">Generate Referral Code</Button>
          </CardFooter>
        </Card>
    </div>
  )
}

export default Referral
