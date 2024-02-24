import { router } from '@/lib/router';
import { useState } from 'react';

export default function Navigation() {
  const [nav] = useState<any>(router.routes[0].children);

  console.log(nav);

  return (
    <ul>
      {nav.map((item: any) => {
        return (
          <li key={item.path}>
            <a href={item.path === '' ? '/' : item.path}>
              {item.index}
              {item.id}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
