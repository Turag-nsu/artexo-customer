'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

export function GtmEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Combine pathname and search params to get the full URL
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    
    // Manually send the 'page_view' event to GTM
    // This will happen every time the URL changes
    sendGTMEvent({ event: 'page_view', page_path: url });

  }, [pathname, searchParams]);

  return null; // This component renders nothing to the page
}