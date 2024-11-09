import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import toast, { Toaster } from "react-hot-toast";

function Referral() {
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReferralCode = () => {
    setIsGenerating(true);

    setTimeout(() => {
      const generatedCode = "REF12345";
      setReferralCode(generatedCode);
      setIsGenerating(false);
      toast.success("Referral code generated successfully!");
    }, 1000);
  };

  const copyToClipboard = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode);
      toast.success("Referral code copied to clipboard!");
    }
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Card>
        <CardHeader>
          <CardTitle>Referral</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="referralCode">Referral Code</Label>
            <div className="flex items-center gap-2">
              <Input
                id="referralCode"
                value={referralCode || ""}
                placeholder="Generate a referral code"
                disabled={!referralCode}
                readOnly
              />
              {referralCode && (
                <Button
                  variant="outline"
                  className="text-black font-bold"
                  onClick={copyToClipboard}
                >
                  Copy Code
                </Button>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full border-custom-left text-white font-bold bg-custom-left"
              >
                Generate Token
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    Create Referral Code
                  </h4>
                  <p className="text-sm text-muted-foreground text-[#252A297A]">
                    📢 Make a certain number of token purchases first to be able
                    to generate a referral link!</p>
                </div>
                <div className="grid gap-6">
                  <Button
                    variant="outline"
                    className="w-full border-custom-left text-white font-bold bg-custom-left"
                    onClick={generateReferralCode}
                    disabled={isGenerating || !!referralCode}
                  >
                    {referralCode ? "Token Generated" : isGenerating ? "Generating..." : "Generate Token"}
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Referral;
