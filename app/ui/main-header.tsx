import classes from './main-header.module.css'
import Image from 'next/image'
export default function MainHeader(){
  return(
    <header className={classes.header}>
      <section className={classes.titleLogo}>
        <Image 
          src="/nav-icon.png" 
          alt="LinkShelf logo" 
          width={75} 
          height={75} 
          className={classes.logo}/>
        <h2><span>L</span>ink<span>S</span>helf</h2>
      </section>
      <section>

      </section>
    </header>
  )
}