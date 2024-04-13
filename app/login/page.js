"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="hero min-h-screen pt-20 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-6xl font-bold">Login now!</h1>
          <p className="py-6">
            Get you very own AI team in seconds and start building your dream
            project.
          </p>
        </div>
        <div className="card shrink-0 w-full rounded-xl max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered rounded-xl"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Link href={"/dashboard"} className="btn btn-primary">Login</Link>
            </div>
            <div className="divider">OR</div>
            <Link className="btn btn-primary btn-outline" href={"/register"}>
              Create Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
