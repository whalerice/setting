import DataTable from '@/ui/data-table';
import { DataTableSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<DataTableSkeleton />}>
      <DataTable />
    </Suspense>
  );
}
