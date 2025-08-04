import React from 'react';

const QualitySection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content and Certifications */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality means safety
            </h2>
            <div className="space-y-4 text-gray-600 mb-8">
              <p className="text-lg leading-relaxed">
                We are involved in validation and certification of our processes.
              </p>
              <p className="text-lg leading-relaxed">
                We validate a stable level of performance and a constant quality of services and products throughout the life of projects.
              </p>
            </div>

            {/* Certification Logos */}
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/assets/img/home/afaq-iso-9001-2-150x150.jpg" 
                  alt="AFAQ ISO 9001 Certification" 
                  className="w-[150px] h-[150px] object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <img 
                  src="/assets/img/home/iris-certification-iso-150x150.jpg" 
                  alt="IRIS Certification ISO/TS 22163" 
                  className="w-[150px] h-[150px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Train Control Panel Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img
                src="/assets/img/home/train.jpg"
                alt="Train Control Panel - Quality and Safety in Transportation"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection; 