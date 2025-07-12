import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { useMemo } from 'react';

/**
 * Represents a single breadcrumb item with a title and a link.
 */
export type BreadcrumbItem = {
  title: string;
  link: string;
};

/**
 * Static route mapping for predefined breadcrumb paths.
 * Keys are exact or dynamic paths (e.g., '/budgets/summary/detail/[id]'),
 * values are arrays of breadcrumb items.
 */
export const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/': [{ title: 'Home', link: '/' }],
  '/portfolio': [
    { title: 'Work', link: '/' },
    { title: 'Education', link: '/' },
  ],
};

/**
 * Normalizes a segment into a display title using custom titles or capitalization.
 * @param segment - The URL segment to normalize (e.g., "create").
 * @param customTitles - Optional custom titles for segments.
 * @returns The normalized title (e.g., "Create").
 */
export const normalizeSegment = (
  segment: string,
  customTitles?: Record<string, string>,
): string => {
  return (
    customTitles?.[segment] ||
    segment.charAt(0).toUpperCase() + segment.slice(1)
  );
};

/**
 * Builds breadcrumb items dynamically from URL segments.
 * @param segments - The array of URL segments.
 * @param config - The breadcrumb configuration.
 * @returns Array of breadcrumb items.
 */
export const buildBreadcrumbItems = (segments: string[]): BreadcrumbItem[] => {
  const items: BreadcrumbItem[] = [];
  let currentPath = '';

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    currentPath += `/${segment}`;

    items.push({
      title: normalizeSegment(segment),
      link: currentPath,
    });
  }

  return items;
};

/**
 * React hook to generate breadcrumbs based on the current pathname.
 * @param customConfig - Optional custom configuration to override defaults.
 * @returns Array of breadcrumb items for the current path.
 */
export function useBreadcrumbs(): BreadcrumbItem[] {
  const pathname = usePathname() || '';
  const searchParams = useSearchParams(); // Returns ReadonlyURLSearchParams | null
  const segments = pathname.split('/').filter(Boolean);

  const effectiveSearchParams = searchParams || new ReadonlyURLSearchParams(); // Default to empty if null

  return useMemo(() => {
    if (routeMapping[pathname]) {
      return routeMapping[pathname].map((item) => ({
        ...item,
        link: item.link,
      }));
    }

    const dynamicRoute = Object.keys(routeMapping).find((route) => {
      const routeSegments = route.split('/').filter(Boolean);
      if (routeSegments.length !== segments.length) return false;

      return routeSegments.every((routeSeg, i) =>
        routeSeg.startsWith('[') && routeSeg.endsWith(']')
          ? true
          : routeSeg === segments[i],
      );
    });

    if (dynamicRoute) {
      return routeMapping[dynamicRoute].map((item) => ({
        ...item,
        link: item.link,
      }));
    }

    const items = buildBreadcrumbItems(segments);
    if (items.length > 0 && items[0].title !== 'Home') {
      items.unshift({ title: 'Home', link: '/' });
    }

    return items;
  }, [pathname, effectiveSearchParams]);
}
