'use client';

import { useBreadcrumbs } from '@/hooks/use-bread-scrumb';
import { Slash } from 'lucide-react';
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';

export default function AppBreadcrumb() {
  const items = useBreadcrumbs();
  if (items && items.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items &&
          items.map((item, index) => (
            <Fragment key={item.title}>
              {index !== items.length - 1 && (
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {index < items.length - 1 && (
                <BreadcrumbSeparator className='hidden md:block'>
                  <Slash />
                </BreadcrumbSeparator>
              )}
              {index === items.length - 1 && (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              )}
            </Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
