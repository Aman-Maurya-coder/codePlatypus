"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";
import { signInWithGitHub } from "../actions";

function GitHubIcon(){
    return (
        <svg width="20" height="20" viewBox="0 0 12 16" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6 14.43 6 13.58C4 14.11 3.28 12.93 3.28 12.93C2.96 12.05 2.28 11.84 2.28 11.84C1.58 11.35 2.42 11.35 2.42 11.35C3.18 11.45 3.59 12.2 3.59 12.2C4.29 13.41 5.52 12.97 6.01 12.72C6.08 12.04 6.37 11.59 6.71 11.26C4.94 11.05 3.05 10.38 3.05 7.53C3.05 6.74 2.76 6.11 2.27 5.65C2.28 5.24 2.54 4.54 1.76 3.64C1.76 3.64 2.48 3.41 4.53 4.65C5.47 4.38 6.48 4.25 7.5 4.25C8.52 4.25 9.47 4.38 10.41 4.65C12.46 3.41 13.18 3.64 13.18 3.64C12.4 4.54 12.65 5.24 12.66 5.65C12.16 6.11 11.87 6.74 11.87 7.53C11.87 10.39 9.97 11.05 8.2 11.26C8.57 11.62 8.88 12.14 8.95 12.71C8.95 12.71 8.96 13.34 8.96 14.03C8.96 14.23 9.11 14.47 9.14 14.59C12.37 13.58 15 10.59 15 7C15 3.58 11.42 0 8 0Z"
            ></path>
        </svg>
    );
}

function SubmitButton(){
    const { pending } = useFormStatus();

    let buttonLabel = "Continue with GitHub";
    let buttonIcon = <GitHubIcon/>;

    if(pending){
        buttonLabel = "Redirecting to GitHub";
        buttonIcon = <Spinner className="size-4" />;
    }

    return (
        <Button
            type="submit"
            className={"w-full"}
            size={"lg"}
            disabled={pending}
        >
            {buttonIcon}
            {buttonLabel}
        </Button>
    )
    
}

type GitHubSignInFormProps = {
    callbackUrl?: string
}

export function GitHubSignInForm({ callbackUrl }: GitHubSignInFormProps) {
    return (
        <form action={signInWithGitHub} className="w-full">
            {callbackUrl ? (
                <input type="hidden" name="callbackUrl" value={callbackUrl} />
            ) : null}
            <SubmitButton />
        </form>
    )
}