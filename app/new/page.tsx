import { prisma } from "@/db";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Client from "./client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

async function createTodoItem(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  const id = data.get("id")?.valueOf().toString();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  id? await prisma.todo.update({where: {id}, data: {title}}) :
  await prisma.todo.create({ data: { title: title, complete: false } });
  redirect("/")
}

async function getTodoItem(id: string) {
  return await prisma.todo.findUnique({
    where: { id },
  })
}

export default async function Page({searchParams}: {searchParams: {pageTitle: string, id: string}}) {
  const { pageTitle, id } = searchParams;
  const todoItem = id? await getTodoItem(id) : {id: '', title: ''};
  return (
    <>
    <Header />

    <main className="p-5 max-w-[750px] w-full mx-auto">
      <Client title={pageTitle}/>
      <form action={createTodoItem} className="flex gap-3 flex-col">
        <input
          type="hidden"
          name="id"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          defaultValue={todoItem?.id}
        />
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          defaultValue={todoItem?.title}
        />
        <div className="flex gap-1 justify-end">
          <Link
            href="/"
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
          >
            Cancel
          </Link>
          { pageTitle === "New" &&
            <button
              type="submit"
              className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
            >
              Create
            </button>
          }
          { pageTitle === "Update" &&
            <button
              type="submit"
              className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-700"
            >
              Update
            </button>
          }
        </div>
      </form>
    </main>

    <Footer />
    </>
  );
}
