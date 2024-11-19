"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { TrolleyIcon } from "@sanity/icons";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      {/* Top row */}
      <div>
        <Link
          href="/"
          className="text-2xl font-bold hover:opacity-50 
            cursor-pointer mx-auto sm:mx-0 text-blue-500"
        >
          AdShop
        </Link>

        <Form
          action="/search"
          className="sm:mt-0 sm:mx-4 mt-2 sm:w-auto sm:flex-1 w-full"
        >
          <input
            name="query"
            id="search"
            type="text"
            placeholder="Search..."
            className="bg-gray-100 border w-full
              rounded px-4 py-2 text-gray-800 focus:ring-blue-500 
              focus:outline-none focus:ring-2 focus:ring-opacity-50 max-w-4xl"
          />
        </Form>

        <div>
            <Link href='/basket' 
                className="flex-1 relative flex justify-center sm:justify-start 
                text-white font-bold py-2 px-4 hover:bg-blue-700 bg-blue-500 space-x-2
                items-center sm:flex-none rounded"
            >
              <TrolleyIcon className='w-6 h-6'/>
              <span>My Basket</span>
            </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
