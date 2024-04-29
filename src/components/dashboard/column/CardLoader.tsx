import CardSkeleton from '@/components/dashboard/column/CardSkeleton';

function CardLoader({ loaderRef, ...props }) {
  return (
    <div ref={loaderRef} {...props}>
      {Array.from({ length: 1 }).map((el, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CardLoader;
