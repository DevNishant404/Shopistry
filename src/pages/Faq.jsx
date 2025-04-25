import { ChevronDown } from "lucide-react";
import { faqs } from "../productContent";
import { useState } from "react";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(prev => (prev === idx ? null : idx)); // toggle open/close
  };

  return (
    <div className="md:px-20 px-3 mt-2 min-h-[70vh]">
      <h2 className="font-semibold text-2xl mb-4">Frequently Asked Questions</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            onClick={() => toggleFaq(idx)}
            className="cursor-pointer relative border rounded border-gray-200 p-2"
          >
            <h3 className="font-medium">{faq.heading}</h3>
            <p
              className={`text-sm mt-5 transition-all duration-300 ${
                openFaqIndex === idx ? "h-fit" : "h-0 overflow-hidden"
              } text-gray-700`}
            >
              {faq.para}
            </p>
            <ChevronDown
              size={15}
              className={`absolute right-2 top-2 transition-transform duration-300 ${
                openFaqIndex === idx ? "rotate-180" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
