export default function Home() {
  console.log('test');

  const renderName = () => {
    const name = 'Amin';
    return <div>{name}</div>;
  };
  return (
    <div className="text-red-500 flex flex-col">hi world {renderName()}</div>
  );
}
