import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Client from "./client";


async function createTodoItem(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title: title, complete: false } });
  redirect("/")
}

export default function Page() {
  return (
    <>
      <Client />
      <form action={createTodoItem} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href="/"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}