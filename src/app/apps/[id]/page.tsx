import InstallBtn from '@/app/components/InstallBtn';
import { getAllApps } from '@/lib/apps';
import { AppType } from '@/types/apps.type';
import Image from 'next/image';
import React from 'react';

interface AppDetailsProps {
  params: {
    id: string;
  };
}

const AppDetails = async ({ params }: AppDetailsProps) => {
  const { id } = await params;

  const allApp = await getAllApps();

  const app = allApp.find(
    (app: AppType) => String(app.id) === String(id)
  );

  // App not found
  if (!app) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">App Not Found</h2>
          <p className="text-base-content/60 mt-2">
            The app you are looking for doesn`&apos;`t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-16">

      {/* Main App Info */}
      <div className="card bg-base-100 border border-base-300 shadow-sm">
        <div className="card-body">

          <div className="flex flex-col md:flex-row gap-8">

            {/* App Image */}
            <div className="shrink-0">
              <div className="w-40 h-40 rounded-3xl overflow-hidden bg-base-200">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* App Information */}
            <div className="flex-1">

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">
                    {app.title}
                  </h1>

                  <p className="text-base-content/60 mt-2">
                    Developed by{' '}
                    <span className="font-medium text-primary">
                      {app.companyName}
                    </span>
                  </p>
                </div>

                <InstallBtn app={app} />
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-3 mt-6">

                <div className="badge badge-lg badge-outline gap-2 py-4">
                  ⭐ {app.ratingAvg}
                </div>

                <div className="badge badge-lg badge-outline gap-2 py-4">
                  👥 {app.reviews} Reviews
                </div>

                <div className="badge badge-lg badge-outline gap-2 py-4">
                  ⬇️ {app.downloads} Downloads
                </div>

                <div className="badge badge-lg badge-outline gap-2 py-4">
                  💾 {app.size} MB
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>


      {/* Description */}
      <div className="mt-8">

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">

            <h2 className="card-title text-2xl">
              About this app
            </h2>

            <p className="text-base-content/70 leading-7 mt-2">
              {app.description}
            </p>

          </div>
        </div>

      </div>


      {/* Ratings */}
      <div className="mt-8">

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body">

            <h2 className="card-title text-2xl mb-6">
              Ratings & Reviews
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Average Rating */}
              <div className="flex flex-col items-center justify-center">

                <div className="text-6xl font-bold">
                  {app.ratingAvg}
                </div>

                <div className="rating rating-sm mt-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      checked={Math.round(app.ratingAvg) === star}
                      readOnly
                    />
                  ))}
                </div>

                <p className="text-sm text-base-content/60 mt-2">
                  Based on {app.reviews} reviews
                </p>

              </div>


              {/* Rating Breakdown */}
              <div className="space-y-4">

                {app.ratings
                  .slice()
                  .sort((a, b) => b.name.localeCompare(a.name))
                  .map((rating) => {

                    const totalRatings = app.ratings.reduce(
                      (total, item) => total + item.count,
                      0
                    );

                    const percentage =
                      totalRatings > 0
                        ? (rating.count / totalRatings) * 100
                        : 0;

                    return (
                      <div
                        key={rating.name}
                        className="flex items-center gap-3"
                      >

                        <span className="w-12 text-sm font-medium">
                          {rating.name}
                        </span>

                        <progress
                          className="progress progress-primary flex-1"
                          value={percentage}
                          max="100"
                        />

                        <span className="w-12 text-right text-sm text-base-content/60">
                          {rating.count}
                        </span>

                      </div>
                    );
                  })}

              </div>

            </div>

          </div>
        </div>

      </div>


      {/* Bottom CTA */}
      <div className="mt-8">
        <div className="hero bg-primary text-primary-content rounded-2xl">
          <div className="hero-content text-center py-10">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Ready to try {app.title}?
              </h2>

              <p className="mt-2 opacity-90">
                Download and start using this app today.
              </p>

              <button className="btn mt-5 bg-base-100 text-base-content border-none">
                Install {app.title}
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AppDetails;