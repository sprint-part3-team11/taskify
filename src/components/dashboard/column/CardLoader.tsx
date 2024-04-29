import CardSkeleton from './CardSkeleton';

function CardLoader({ loaderRef, ...props }) {
  return (
    <div ref={loaderRef} {...props}>
      <CardSkeleton />
    </div>
  );
}

export default CardLoader;
