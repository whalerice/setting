// import MovieList from '@/ui/movie-list';
import { TicketListSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<TicketListSkeleton />}>
      <div>dddd</div>
      {/* <MovieList /> */}
    </Suspense>
  );
}
