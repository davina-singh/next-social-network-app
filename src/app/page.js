// import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  // const user = await currentUser();
  // if (!user)
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to my social-network</h1>
      <h6>where you can:</h6>
      <ul>
        <li>Sign up for an account to log in and out</li>
        <li>Create a profile with - add a bio and where you live</li>
        <li>Create posts and view them on your timeline</li>
      </ul>
    </main>
  );
  // return <div>Hello{user?.firstName}</div>;
}
