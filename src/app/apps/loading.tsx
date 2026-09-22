
const AppsLoading = () => {
  return (
    <div className="my-[80px] w-11/12 mx-auto">
      
      {/* Heading Skeleton */}
      <div className="space-y-4 max-w-[400px] text-center mx-auto">
        <div className="skeleton h-10 w-64 mx-auto"></div>

        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-4/5 mx-auto"></div>
        </div>
      </div>

      {/* Apps Skeleton Grid */}
      <div className="grid grid-cols-1 mt-10 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="card bg-base-100 border border-base-300 shadow-sm"
          >
            <div className="card-body">
              
              {/* App Image */}
              <div className="skeleton h-40 w-full rounded-xl"></div>

              {/* App Title */}
              <div className="skeleton h-6 w-3/4 mt-2"></div>

              {/* Company */}
              <div className="skeleton h-4 w-1/2"></div>

              {/* Description */}
              <div className="space-y-2 mt-2">
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-5/6"></div>
              </div>

              {/* Bottom Info */}
              <div className="flex justify-between items-center mt-3">
                <div className="skeleton h-5 w-16"></div>
                <div className="skeleton h-5 w-20"></div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AppsLoading;