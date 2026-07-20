"use server";

import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signInWithGitHub(formData: FormData){
    const callback = formData.get("callbackUrl") as string | undefined;
    
    const result = await auth.api.signInSocial({
        body: {
            provider: "github",
            callbackURL: "/",
        },
        headers: await headers(),
    });
    
    if(result.url){
        return redirect(result.url);
    }

    throw new Error("Failed to sign in with GitHub");
}