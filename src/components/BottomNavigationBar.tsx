import React from "react";
import Link from "next/link";

const BottomNavigationBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
        <li>
          <Link href="/page3">Page 3</Link>
        </li>
        <li>
          <Link href="/page4">Page 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigationBar;
