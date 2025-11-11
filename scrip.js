
  const appContainer = document.querySelector(".application-container")
  appContainer.innerHTML =`<div class='application-container'>
  <form>
  <div class='user-information'>
    <label for='name'>
        Name
        <input type='text' placeholder="Enter your name"id='name'/>
        </label>
        <label for='email'>
            Email
        <input type='email' name='email' id='email'placeholder="your email"/>
        </label>
        </div>
        <label for='position'>
        <select id='position'>

          <option>Select an option </option>
          <option>Developer</option>
          <option>Designer</option>
          <option>Manager</option>
          </label>
        </select>
        <fieldset class='radio-group'>
          <legend> Availability </legend>
          <label for='full-time'>Full-Time
            <input type='radio' name='availability' id='full-time'/></label>
            <label for='part-time'>Part-Time
            <input type='radio' name='availability' id='part-time'/></label>
        </fieldset> 

        <label for='message'> Why do you want this job? </label>
        <textarea id='message' placeholder='Enter your motivation'></textarea>
       
    </form>
</div>`