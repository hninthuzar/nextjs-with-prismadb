"use client";

import Link from "next/link";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void
};
export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li key={id} className="flex items-center mb-3">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="mx-3 cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <div className="ml-auto">
        { complete? <label className="bg-blue-400 rounded px-2 text-sm">update</label> :
            <Link 
            href={{
              pathname: '/new/',
              query: { pageTitle: "Update", id },
            }}
            >
              <label className="bg-blue-600 rounded px-2 text-sm cursor-pointer hover:bg-blue-400"
              >
                <span>update</span>
              </label>
            </Link>
        }
        
        <label className="ml-3 bg-red-600 rounded px-2 text-sm cursor-pointer hover:bg-red-400"
        onClick={()=>deleteTodo(id)} >
          <span>delete</span>
        </label>
      </div>
    </li>
  );
}
