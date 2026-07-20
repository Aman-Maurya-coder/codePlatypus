import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GitHubSignInForm } from "@/features/auth/components/github-sign-in-form";
import { Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to Code Platypus AI Code Reviewer with your account",
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};

const signInPage = async ({ searchParams }: SignInPageProps) => {
  const { callbackUrl } = await searchParams;

  return (
    <div className="flex flex-col gap-6">
      <Card className="w-full shadow-xl border-border/80 bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-2 pb-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Sparkles className="size-6 text-primary animate-pulse" />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome back
          </CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Sign in to your account to continue to Code Platypus
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <FieldSet>
            <FieldGroup className="space-y-4">
              <Field>
                <FieldLabel htmlFor="email">Email address</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  disabled
                  className="bg-muted/30"
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between w-full">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="#"
                    className="text-xs text-primary hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  disabled
                  className="bg-muted/30"
                />
                <FieldDescription className="text-xs text-muted-foreground mt-1">
                  Email authentication coming soon. Use GitHub below.
                </FieldDescription>
              </Field>

              <Button type="button" disabled className="w-full font-semibold">
                Sign in with Email
              </Button>
            </FieldGroup>

            <FieldSeparator className="my-4">
              Or continue with
            </FieldSeparator>
          </FieldSet>

          <GitHubSignInForm callbackUrl={callbackUrl} />
        </CardContent>

        <CardFooter className="flex flex-col gap-3 pt-4 text-center text-xs text-muted-foreground border-t border-border/40">
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground/80">
            <Shield className="size-3.5 text-emerald-500" />
            <span>Secure authentication powered by BetterAuth</span>
          </div>
          <p>
            By clicking continue, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default signInPage;
