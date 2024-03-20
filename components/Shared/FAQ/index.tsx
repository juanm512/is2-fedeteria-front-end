export default function FAQ() {
  return (
    <section className="mx-auto flex flex-col items-center justify-around gap-16 sm:gap-4 lg:gap-16 w-full max-w-[100rem] min-h-[50vh] py-8 px-2 sm:px-8">
      <h1 className="text-4xl underline font-bold text-primary-500">
        Preguntas Frecuentes
      </h1>
      <div className="flex flex-wrap w-full sm:w-10/12 mx-auto">
        <div className="w-full sm:w-3/4 p-4">
          {' '}
          <div className="w-full h-32 bg-primary-200 rounded-xl"></div>{' '}
        </div>
        <div className="w-full sm:w-1/4 p-4">
          {' '}
          <div className="w-full h-32 bg-primary-200 rounded-xl"></div>{' '}
        </div>
      </div>
    </section>
  );
}
