
const clients = [
  { name: "Ridgewells Catering" },
  { name: "Well Dunn Catering" },
  { name: "Sheraton Hotel" },
  { name: "Windows Catering" },
  { name: "La Prima Food Group" },
  { name: "National Democratic Woman's Club" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by the Best
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to have worked with some of the most prestigious names in the industry.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="text-xl font-semibold text-gray-600">
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
