import CardSkeleton from '@/components/dashboard/column/CardSkeleton';

function CardLoader({ loaderRef, ...props }: { loaderRef: any }) {
  return (
    <div ref={loaderRef} {...props}>
      {Array.from({ length: 1 }).map((el, index) => (
        // eslint-disable-next-line
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CardLoader;
