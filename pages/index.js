export default function Home() {

  const handleSubmit = data => {
    console.log(data);
  };
  
  return (
    <div>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <form onSubmit={handleSubmit}>
      <label>Example</label>
      <input
        name="example"
        defaultValue="test"
        data-testid="example"
      />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        data-testid="exampleRequired"
      />
      <input type="submit" data-testid="submit" />
    </form>
    </div>
  )
}
