import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-r-0 border-l-0">
      <div className="py-6 px-5 max-w-7xl lg:mx-auto w-full flex items-center justify-between">
        <h1>Header</h1>
        <div>
          <SignedOut>
            <Button asChild variant={"outline"}>
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
