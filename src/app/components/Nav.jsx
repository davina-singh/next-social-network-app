import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function Nav() {
  const { userId } = auth();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/posts/new">Create new post</Link>
        </li>
        <li>
          <Link href="/posts">View all posts</Link>
        </li>
        <li>{userId ? <UserButton /> : <SignInButton />}</li>
      </ul>
    </nav>
  );
}
