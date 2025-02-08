const Portfolio = () => {
    const projects = [
      {
        title: "E-Commerce Website",
        image: "/assets/Ecommerce.webp",
        description: "A fully functional online shopping platform with secure payments and product management.",
      },
      {
        title: "Business Dashboard",
        image: "/assets/Business.jpeg",
        description: "An analytics dashboard with real-time data visualization for business insights.",
      },
      {
        title: "Shopping Website",
        image: "/assets/Shopping.jpg",
        description: "A  Shopping involves with the category of Home Appliances,Jwellery,Mobile Phones,Accesories, Beauty ,Health Care",
      },
    ];
  
    return (
      <div className="min-h-screen bg-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Portfolio</h2>
          <p className="text-gray-600 text-lg mb-12">
            Explore some of our latest projects that showcase our expertise and creativity.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  