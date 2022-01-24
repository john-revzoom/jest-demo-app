import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
        <div className="formGroup">
          <label>Optional Input</label>
          <input name="testInput" defaultValue="test" data-testid="testInput" />
        </div>

        <div className="formGroup">
          <label>Required Input</label>
          <input
            {...register("testRequiredInput", {
              required: "This field is required",
            })}
          />
          {errors?.testRequiredInput && (
            <p>{errors.testRequiredInput.message}</p>
          )}
        </div>

        <div className="formGroup">
          <label>Phone Number Input</label>
          <input data-testid="phoneInput" />
        </div>

        <button type="submit" data-testid="submitBtn" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}
