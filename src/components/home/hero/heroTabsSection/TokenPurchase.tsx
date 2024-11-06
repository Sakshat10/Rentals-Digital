import { useState } from "react";
import Button from "@/components/shared/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function TokenPurchase() {
  const [isConnected, setIsConnected] = useState(false);

  const handleButtonClick = () => {
    if (!isConnected) {

      setIsConnected(true);
    } else {
      console.log("Proceeding with token purchase...");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Token Purchase</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="amount">Enter the amount</Label>
            <Input id="amount" defaultValue="0.00" />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleButtonClick}
            className={`w-full ${
              isConnected ? "bg-teal-700 text-white" : "border-custom-left border-2"
            }`}
          >
            {isConnected ? "Buy Now" : "Connect Wallet"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TokenPurchase;
