const OurFacilities = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-1">
            <svg
              className="w-5 h-5 text-[#4d8c4a]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.666 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
            <span className="text-[#4d8c4a] text-sm">
              knowledge meets innovation
            </span>
          </div>
          <h1 className="text-5xl font-bold">Our Facilities</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Facility List */}
          <div className="md:col-span-5 space-y-1">
            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium text-[#4d8c4a]">Hostel</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Laboratory</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Hospital Service</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Cafeteria</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Training</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Medical Education Unit</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Departments</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Publications</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-white cursor-pointer">
              <span className="font-medium">Seminar</span>
              <div className="w-6 h-6 rounded-full bg-[#e9f5e9] flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[#4d8c4a]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.4 18L8 16.6l4.6-4.6L8 7.4 9.4 6l6 6-6 6z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="md:col-span-3">
            <div className="h-[580px] w-full overflow-hidden">
              <img
                src="https://i.postimg.cc/BbSV83bn/analog-landscape-city-with-buildings.jpg"
                alt="Hostel Building"
                className="w-[404px] h-[570px] object-cover"
              />
            </div>
          </div>

          {/* Right Column - Facility Details */}
          <div className="md:col-span-4 bg-white p-6 pt-28">
            <h2 className="text-2xl font-semibold text-[#4d8c4a] mb-6">
              Hostel Facilities
            </h2>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Ladies hostel:</h3>
              <p className="text-gray-600">
                Hostel accommodations for female students are available with
                limited number of seats.
              </p>
            </div>

            <a
              href="*"
              className="text-blue-500 flex items-center text-sm mb-8 mt-10"
            >
              View Details
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>

            <div className="mt-auto">
              <a
                href="*"
                className="inline-flex items-center bg-[#4d8c4a] text-white px-6 py-3 rounded hover:bg-[#3d7c3a] transition-colors mt-16"
              >
                View Our Program
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFacilities;
