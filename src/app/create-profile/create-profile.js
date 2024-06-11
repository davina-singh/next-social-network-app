// import { currentUser } from "@clerk/nextjs";
import SubmitButton from "@/app/components/SubmitButton";
import { sql } from "@vercel/postgres";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

export default async function Page() {
  async function handleUserSubmit(formData) {
    "use server";
    const bio = formData.get("users.bio");
    const location = formData.get("users.location");

    await sql`INSERT INTO users (bio, location) VALUES (${bio}, ${location})`;
    // revalidatePath("/users/[userProfile");
    // redirect("/my-profile");
  }

  // const user = await currentUser();
  // if (!user) return <h1>Please Sign in</h1>;
  return (
    <div>
      {/* <h1>Hello{user?.firstName}</h1> */}
      <p>Please fill in the below form for your user profile</p>
      <form action={handleUserSubmit}>
        <label>Add a bio</label>
        <textarea
          id="bio"
          name="users.bio"
          placeholder="add a bio here.."
        ></textarea>
        <label>Location</label>
        <input
          id="location"
          name="users.location"
          type="text"
          placeholder="Add your location here.."
        ></input>
        <SubmitButton />
      </form>
    </div>
  );
}
