import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { lusitana } from '../../ui/fonts';
import { Suspense } from 'react';
import {
  CardSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="md:gird-cols-4 mt-6 grid grid-cols-1 gap-6 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
// You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow
// data fetch.
// You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
// You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.
// Where you place your suspense boundaries will vary depending on your application. In general, it's good practice to move your data fetches down
// to the components that need it, and then wrap those components in Suspense. But there is nothing wrong with streaming the sections or the whole
// page if that's what your application needs.
