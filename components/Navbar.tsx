import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth/auth";
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar } from "@base-ui/react/avatar";

export default async function Navbar() {
  const session = await getSession();
  return (
    <nav className="border-b border-gray-200 bg-white ">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
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
                      className="relative h-8 w-8 rounded-full"
                    >
                      <Avatar.Root>
                        <Avatar.Fallback className="bg-primary">
                          {session.user.name[0].toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar.Root>
                    </Button>
                  }
                />
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
