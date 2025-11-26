"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Car, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { start } from "repl";
import { toast } from "sonner";

export default function VerifyRequest() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [emailPending, startTransition] = useTransition();
    const params = useSearchParams();
    const email = params.get('email') as string;
    const isOtpComplete = otp.length === 6; 

    function verifyOtp() {
        startTransition(async () => {
            await authClient.signIn.emailOtp({
                email: email,
                otp: otp,
                fetchOptions:{
                    onSuccess: () => {
                        toast.success("Email verified, you will be redirected ...");
                        router.push("/");
                    },
                    onError: (error) => {
                        toast.error("Invalid OTP, please try again.");
                    }

                }
            })
        })
    }

    return (
        <Card className="w-full mx-auto ">
            <CardHeader className="text-center">
                <CardTitle className="text-xl">
                    Please check your email
                </CardTitle>
                <CardDescription> 
                    We have sent OTP code to your email address.
                    Please open your email and enter the OTP to verify your identity.
                    If you don't see the email, please check your spam folder.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6"> 
                <div className="flex flex-col items-center space-y-2">   
                    <InputOTP value={otp} onChange={(value) => setOtp(value)} maxLength={6} className="gap-2" >
                    <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                    </InputOTPGroup>
                    </InputOTP>
                    <p className="text-sm text-muted-foreground">Enter the OTP sent to your email address</p>
                </div>
                <Button 
                onClick={verifyOtp} 
                disabled={emailPending || !isOtpComplete} 
                className="w-full">
                    {emailPending?(
                        <>
                        <Loader2 className="size-4 animate-spin"/>
                        <span>Verifying...</span>
                        </>
                    ):(
                        <>
                        <span>Verify OTP</span>
                        </>
                    )}
                </Button>
            </CardContent>
        </Card>
    )
}