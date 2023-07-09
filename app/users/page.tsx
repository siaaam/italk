"use client";

import EmptyState from "../components/EmptyState";

const page = () => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
      {/* <button onClick={() => signOut()}>logout</button> */}
    </div>
  );
};

export default page;
