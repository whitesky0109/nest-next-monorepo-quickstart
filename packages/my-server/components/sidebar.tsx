import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <div>
      <div style={{ marginBottom: 15 }}>
        <Link
          href="/views/home"
          as="/"
          style={{
            fontSize: 22,
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          EXAMPLE APP
        </Link>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home" as="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/views/about" as="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/views/blog" as="/blog" prefetch={false}>
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
