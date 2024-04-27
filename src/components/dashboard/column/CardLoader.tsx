function CardLoader({ loaderRef, ...props }) {
  return (
    <div ref={loaderRef} {...props}>
      CardLoader
    </div>
  );
}

export default CardLoader;
