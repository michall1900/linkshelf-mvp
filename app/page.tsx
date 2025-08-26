import Image from "next/image";
import LoginForm from "./ui/login-form";
import classes from './page.module.css'

export const metadata = {
  title: 'LinkShelf',
  description: "Save and rate your bookmarks"
}
export default function Home() {
  return (
    <main className={classes.mainContainer}>
      <h1 className={classes.title}>Welcome To LinkShelf</h1>
      <section>
        <LoginForm/>
      </section>
    </main>
  );
}
