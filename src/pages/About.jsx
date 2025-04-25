import aboutus from "/assets/images/aboutUs.png";
function About() {
  return (
    <div className="md:px-30 px-3 min-h-[70vh]">
      <h2 className="font-semibold py-2 text-2xl">About Us</h2>
      <div className="flex lg:flex-row flex-col gap-4 ">
          <img className="max-h-[250px] max-w-[400px] border border-gray-200 shadow" src={aboutus} alt="" />
        <div>
          <p className="text-sm text-gray-700">
            Welcome to Shopisty, your trusted destination for quality,
            convenience, and unbeatable value. We’re more than just an online
            store — we’re a community built around making shopping easy,
            enjoyable, and reliable. <br /> <br />Our mission has always
            been simple: deliver top-notch products with exceptional customer
            service. Whether you're looking for the latest trends, everyday
            essentials, or unique finds, we’re here to bring them right to your
            doorstep.
          </p>

          <h3 className="font-semibold text-xl mt-3">At Sopsitry, we:</h3>
          <ul className="list-inside text-gray-700 text-sm">
            <li>1. Curate products from trusted brands and independent creators</li>
            <li>2. Offer secure payment options and fast shipping</li>
            <li>3. Value transparency, quality, and customer satisfaction</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
