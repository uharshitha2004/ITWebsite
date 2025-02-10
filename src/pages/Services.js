const Service = () => {
    const services = [
      {
        title: "Web Development",
        description: "We build modern and responsive websites with the latest technologies.",
      },
      {
        title: "Mobile App Development",
        description: "Creating powerful and user-friendly mobile applications.",
      },
      {
        title: "Cloud Computing",
        description: "Secure and scalable cloud solutions for businesses.",
      },
      {
        title: "Cyber Security",
        description: "Protecting your data and applications from cyber threats.",
      },
    ];
  
    return (
      <div className="full h - screen min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-6">
          {services.map((service, index) => (
            <div key={index} className="bg-transparent shadow-lg p-6 rounded-lg w-80 text-center">
              <h2 className="text-2xl font-semibold text-blue-600">{service.title}</h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Service;
  