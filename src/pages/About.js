const About = () => {
    return (
      <div
        className="bg-blue-300 h-screen w-full flex items-center justify-center text-black"
        style={{
          backgroundImage: "url('/assets/bg3.jpg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white/50 p-8 rounded-lg text-top">
        
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2 font-bold">
          Einfratech Systems India Private Limited is a Non-govt company, incorporated on 26 May, 2000.
           It's a private unlisted company and is classified as'company limited by shares'.</p>

          <p className="text-lg mt-2 font-bold">Company's authorized capital stands at Rs 5.0 lakhs and has 20.0% paid-up capital which is Rs 1.0 lakhs.
             Einfratech Systems India Private Limited last annual general meet (AGM) happened on 30 Sep, 2016.
              The company last updated its financials on 31 Mar, 2016 as per Ministry of Corporate Affairs (MCA).</p>

          <p className="text-lg mt-2 font-bold">Einfratech Systems India Private Limited is majorly in Business Services business from last 25 years and currently, 
            company operations are active. Current board members & directors are AJAY BHASKAR RAUT and RENGANATHAN BALASUBRAMANIAM .
             Company is registered in Mumbai (Maharashtra) Registrar Office. </p>

         <p className="text-lg mt-2 font-bold">Einfratech Systems India Private Limited registered address is EXCHANGE HOUSE,
             BUILDING NO.8 (105), SECTOR II, MILLENNIUM BUSINESS PARK, MAHAPE NAVI MUMBAI MH 400710 IN.</p>
          
        </div>
      </div>
    );
  };
  
  export default About;
  