import Shape from "./Shape/shape";

export default function Home() {
  const BLOCK_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  return (
    <main>
      <Shape data={BLOCK_DATA} />
    </main>
  );
}
