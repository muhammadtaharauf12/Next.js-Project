"use client";
import { useRouter } from "next/navigation";
import { DropdownMenuItem, DropdownMenuGroup } from "./ui/dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";

export default function SignOutButton() {
    const router=useRouter()
  return (
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={async () => {
         const result=await signOut()
         if(result.data){
              router.push('/sign-in')
         }
         else{
            alert('Error signing out')
         }
      
         }}>
        LogOut
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
}
