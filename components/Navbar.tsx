"use client";


import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "./ui/dropdown-menu";
import { Avatar } from "@base-ui/react/avatar";

import SignOutButton from "./sign-ou-bttn";
import { useSession } from "@/lib/auth/auth-client";

export default  function Navbar() {
  const{data:session}=useSession()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold text-primary"
        >
          <Briefcase />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black"
                >
                  Dashboard
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      className="relative h-10 w-10 rounded-full p-0"
                    >
                      <Avatar.Root className="h-10 w-10 overflow-hidden rounded-full">
                        <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-primary font-semibold text-white">
                          {session.user.name[0].toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    </Button>
                  }
                />

                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>
                      <div>
                        <p> {session.user.name}</p>
                        <p> {session.user.email}</p>
                      </div>
                     
                    </DropdownMenuLabel>
                    <SignOutButton/>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="ghost"
                  className="text-gray-900 hover:text-black"
                >
                  Log In
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button className="text-gray-200 hover:text-black">
                  Start for free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
