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
import { SelectHero } from "./SelectHero";
import ConnectWallet from "@/components/shared/ConnectWallet";
import { useAccount } from "wagmi";
import usePurchaseToken from "@/hooks/web3/usePurchaseToken";
import toast from "react-hot-toast";

function TokenPurchase() {
  const { address: walletAddress } = useAccount();
  const { purchaseToken, isSuccess, isPending } = usePurchaseToken();
  
  const [amount, setAmount] = useState<number>(0);
  const [token, setToken] = useState<"USDT" | "BNB">("BNB");
  const [referralCode, setReferralCode] = useState<string | undefined>("");

  const handlePurchase = async () => {
    if (amount <= 0) {
      return toast.error("Amount must be greater than 0.");
    }

    await purchaseToken({ amount, token, referralCode });
    setAmount(0);
    setReferralCode("");
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Token Purchase</CardTitle>
        </CardHeader>
        <CardContent>
          <SelectHero setToken={setToken} /> 
        </CardContent>

        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="amount">Enter the amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder={`Enter amount in ${token}`}
            />
          </div>

        </CardContent>

        <CardFooter>
          {!walletAddress ? (
            <ConnectWallet className="w-full" />
          ) : (
            <Button
              className="w-full !bg-custom-left text-white"
              onClick={handlePurchase}
            >
              {isPending ? "Processing..." : `Buy ${token}`}
            </Button>
          )}
        </CardFooter>
      </Card>

      {isSuccess && (
        <div className="text-green-500 mt-4">Successfully purchased token!</div>
      )}
    </div>
  );
}

export default TokenPurchase;
