import Head from 'next/head';

function Login() {
  return (
    <div>
      <Head>
        <title>Imperial Fitness - Login</title>
      </Head>
      <h1>Imperial Fitness</h1>
      <p>40,000 reasons to work out</p>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;