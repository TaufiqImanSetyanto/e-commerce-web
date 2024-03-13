import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound404() {
  return (
    <div className="flex justify-center items-center min-h-screen text-slate-800">
      <div className="text-center">
        <h1 className="text-3xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-slate-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="w-1/2 mx-auto my-6">
          <Link to={"/"}>
            <Button children={"Go back"} />
          </Link>
        </div>
      </div>
    </div>
  );
}
