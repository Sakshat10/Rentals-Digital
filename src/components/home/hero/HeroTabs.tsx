import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import TokenPurchase from "./heroTabsSection/TokenPurchase"
import Referral from "./heroTabsSection/Referral"

function HeroTabs() {
  return (
    <div>
    <Tabs defaultValue="Token" className="md:w-[350px] lg:w-[430px] w-[90vw]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Token">Token Purchase</TabsTrigger>
        <TabsTrigger value="Referral">Referral</TabsTrigger>
      </TabsList>

      <TabsContent value="Token">
       <TokenPurchase/>
      </TabsContent>

      <TabsContent value="Referral">
        <Referral/>
      </TabsContent>

      </Tabs>
    </div>
   

  )
}

export default HeroTabs
