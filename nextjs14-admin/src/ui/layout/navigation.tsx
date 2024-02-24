import Link from 'next/link';
import { GetProp, Menu, MenuProps, MenuTheme } from 'antd';
import { usePathname } from 'next/navigation';

import { router } from '@/lib/constants';
import { useEffect } from 'react';

type MenuItem = GetProp<MenuProps, 'items'>[number];

function getMenu(role: string) {
  const items: MenuItem[] = [];

  const title = (item: any) => {
    const path = item.path === '/' ? `/${role}` : `/${role}${item.path}`;
    if (item.path) {
      if (item.path.indexOf('/') === -1) return item.label;
      else return <Link href={path}>{item.label}</Link>;
    }

    return item.label;
  };

  const icon = (item: any) => {
    const Icon = item;
    return !item ? null : <Icon />;
  };
  const child = (items: any) => {
    return items.map((item: any) => ({
      key: item.path,
      label: title(item),
    }));
  };

  router.map((item: any) => {
    if (item.haveAuthority) {
      const isRole = item.haveAuthority.filter((e: string) => e === role);
      if (isRole.length > 0) {
        if (item.type) {
          items.push({ label: title(item), type: item.type });
        } else {
          items.push({
            key: item.path,
            label: title(item),
            icon: icon(item.icon),
            children: item.children ? child(item.children) : null,
          });
        }
      }
    } else {
      items.push({ label: title(item), type: item.type });
    }
  });

  return items;
}

const Navigation = ({ theme, role }: { theme: MenuTheme; role: string }) => {
  const pathname = usePathname();
  let defaultSelectedKeys: string[] = [];
  let defaultOpenKeys: string[] = [];

  const loop = (item: any) => {
    item.map((e: any) => {
      if (e.key !== undefined) {
        const currentPath = `/${role}${e.key}`;
        if (currentPath === pathname) {
          const parentName = e.key.split('/')[1];
          defaultSelectedKeys.push(e.key);
          defaultOpenKeys.push(parentName);
        }
      }
      if (e.children) loop(e.children);
    });
  };

  const onOpenChange = (openKeys: string[]) => {
    defaultOpenKeys = [...defaultOpenKeys, ...openKeys];
  };

  useEffect(() => {
    loop(getMenu(role));
  }, [pathname]);

  return (
    <Menu
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onOpenChange={onOpenChange}
      mode="inline"
      items={getMenu(role)}
      theme={theme}
    />
  );
};

export default Navigation;
