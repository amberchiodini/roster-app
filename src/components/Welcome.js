function Welcome() {
    const currentHour = new Date().getHours()
     const message = currentHour < 5 ? "Why are you still up?" 
       : currentHour < 12 ? "Good morning"
       : currentHour < 18 ? "Good afternoon"
       : "Good Evening"

    return (
      <div>
        <h1>Welcome to my roster app!</h1>
        <p>{message} sports fans!</p>
      </div>
    );
  }
  
  export default Welcome;