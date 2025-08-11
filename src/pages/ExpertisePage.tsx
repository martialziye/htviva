import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Import expertise step images
import expertiseStep1 from "/src/public/asset/img/expoertise/expertise-step-1.png";
import expertiseStep2 from "/src/public/asset/img/expoertise/expertise-step-2.png";
import expertiseStep3 from "/src/public/asset/img/expoertise/expertise-step-3.png";
import expertiseStep4 from "/src/public/asset/img/expoertise/expertise-step-4.png";
import expertiseStep5 from "/src/public/asset/img/expoertise/expertise-step-5.png";
import expertiseStep6 from "/src/public/asset/img/expoertise/expertise-step-6.png";

// Import background image
import backgroundImage from "/src/public/asset/img/expoertise/fond-ligne.jpg";

const ExpertisePage = () => {
  const { t } = useLanguage();

  const expertiseSteps = [
    {
      title: "SPECIFICATIONS",
      description: "requirements, statements, notes",
      image: expertiseStep1,
      color: "text-brand-red bg-brand-red/10",
    },
    {
      title: "DESIGN",
      description:
        "Electronic Boards, COTS integration, Mechanical integration, Software",
      image: expertiseStep2,
      color: "text-brand-teal bg-brand-teal/10",
    },
    {
      title: "PROTOTYPING",
      description: "Prototype, Qualification, Industrialisation",
      image: expertiseStep3,
      color: "text-navy bg-navy/10",
    },
    {
      title: "QUALIFICATION",
      description:
        "The HTVIVA qualification team supports the validation of designs based on industry standards in all applications. Our laboratory guarantee extended temperature range: - EMC testing thanks to our Faraday cage - Thermal testing through our Climatic chambers We also assist you in monitoring COFRAC testing.",
      image: expertiseStep6,
      color: "text-green-600 bg-green-600/10",
    },
    {
      title: "MANUFACTURING",
      description: "Electronic boards, Assembly, Tests",
      image: expertiseStep4,
      color: "text-purple-600 bg-purple-600/10",
    },
    {
      title: "DELIVERY",
      description: "we deliver all over the world",
      image: expertiseStep5,
      color: "text-blue-600 bg-blue-600/10",
    },
    {
      title: "SERVICE",
      description:
        "After-sales service, Maintenance, Repair, Obsolescence management",
      image: expertiseStep6, // Using step 6 image for step 7 as well
      color: "text-orange-600 bg-orange-600/10",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Expertise Timeline */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-wide">
          <div className="max-w-3xl mb-5">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              {t("expertise.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t("expertise.description")}
            </p>
          </div>
        </div>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {expertiseSteps.map((step, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={index}
                      className="relative flex items-start w-full"
                    >
                      {/* Content positioned left or right */}
                      <div
                        className={`w-1/2 ${
                          isEven ? "pr-8 text-right" : "pl-8 ml-auto text-left"
                        }`}
                      >
                        {/* Image above content */}
                        <div
                          className={`mb-4 flex ${
                            isEven ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className="flex items-center justify-center"
                            style={{ width: "120px", height: "120px" }}
                          >
                            <img
                              src={step.image}
                              alt={`${step.title} icon`}
                              className="w-30 h-30 object-contain"
                            />
                          </div>
                        </div>

                        {/* Content - just text, no box */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-navy mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {/* Interactive dot on the center line */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-14">
                        <div className="w-4 h-4 bg-brand-teal rounded-full border-2 border-white shadow-md transition-all duration-300 hover:w-5 hover:h-5 hover:bg-brand-teal hover:shadow-lg hover:scale-110 cursor-pointer z-10 relative"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Timeline - Simplified */}
      <section
        className="py-20 md:hidden relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container-wide">
          <div className="space-y-8">
            {expertiseSteps.map((step, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Image */}
                  <div
                    className="flex items-center justify-center mb-4"
                    style={{ width: "120px", height: "120px" }}
                  >
                    <img
                      src={step.image}
                      alt={`${step.title} icon`}
                      className="w-30 h-30 object-contain"
                    />
                  </div>

                  {/* Content - just text, no box */}
                  <div className="p-6 w-full">
                    <h3 className="text-lg font-bold text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to start your project?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let us guide you through each step of your electronic system
              development
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-brand-red hover:bg-brand-red/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertisePage;
