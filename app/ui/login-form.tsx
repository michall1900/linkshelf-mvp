
import classes from './login-form.module.css'

export default function LoginForm(){


  return(
    <form className={classes.form}>
      <fieldset className={classes.fieldset}>
        <div className={classes.inputSection}>
          <label htmlFor = "email">Email:</label>
          <input required name="email" id="email" type="email" maxLength={50} placeholder="example@gmail.com"></input>
        </div>
        <div className={classes.inputSection}>
          <label htmlFor = "password">Password:</label>
          <input required name="password" id="password" type="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{8,20}" title="8 to 20 characters with lowercase, uppercase, and digits." placeholder="Enter your password here"></input>
        </div> 
      </fieldset>
      <fieldset className={classes.fieldset}>
        <button className={classes.button} type="submit">Login</button>
      </fieldset>
    </form>  
  )
}