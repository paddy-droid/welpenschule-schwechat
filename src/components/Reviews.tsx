import Image from 'next/image';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { getReviews } from '@/lib/getReviews';

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'w-7 h-7' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= rating ? 'text-yellow-400' : 'text-gray-200'} drop-shadow-sm`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default async function Reviews() {
  const data = await getReviews();

  if (data.error) {
    return (
      <div className="text-red-500 text-center py-8 text-sm">
        <p className="font-bold">Fehler: {data.error}</p>
        {data.debug && <pre className="mt-2 text-xs text-left bg-red-50 p-3 rounded overflow-auto max-h-40">{data.debug}</pre>}
      </div>
    );
  }

  if (!data.reviews || data.reviews.length === 0) {
    return null;
  }

  const avgRating = data.rating || 5;

  return (
    <div>
      {/* Aggregate Rating Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-6 pb-8 border-b border-slate-100">
        <div className="flex items-center gap-5">
          <div className="text-center">
            <div className="text-6xl font-black text-gray-900 leading-none">{avgRating.toFixed(1)}</div>
            <div className="mt-2">
              <StarRating rating={Math.round(avgRating)} size="lg" />
            </div>
            <p className="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wider">Ø Bewertung</p>
          </div>
          <div className="h-16 w-px bg-slate-200 hidden sm:block"></div>
          <div className="text-left">
            <p className="text-lg font-bold text-gray-900">{data.name || 'Hundeschule Willenskraft'}</p>
            <p className="text-sm text-gray-500">Auf Google bewertet</p>
            <div className="flex items-center gap-2 mt-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold text-gray-700">Google Reviews</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-green-700 font-semibold text-sm">Verifizierte Bewertungen</span>
          </div>
          <p className="text-xs text-gray-400 text-center sm:text-right">Echte Erfahrungen echter Kunden</p>
        </div>
      </div>

      {/* Review Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews.map((review, index) => (
          <Card key={index} className="relative overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-0.5 group">
            {/* Decorative quote */}
            <div className="absolute top-3 right-4 text-8xl text-slate-50 font-serif leading-none select-none pointer-events-none group-hover:text-yellow-50 transition-colors" aria-hidden="true">&ldquo;</div>

            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-center gap-3">
                {review.profile_photo_url ? (
                  <Image
                    src={review.profile_photo_url.startsWith('https') ? review.profile_photo_url : `https:${review.profile_photo_url}`}
                    alt={`Profilbild von ${review.author_name}`}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full ring-2 ring-yellow-100 flex-shrink-0 object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center flex-shrink-0 ring-2 ring-yellow-200">
                    <span className="text-yellow-700 font-black text-lg">{review.author_name[0]?.toUpperCase()}</span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-gray-900 truncate text-base">{review.author_name}</p>
                  <StarRating rating={review.rating} size="sm" />
                </div>
              </div>
              {review.relative_time_description && (
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {review.relative_time_description}
                </p>
              )}
            </CardHeader>

            <CardContent className="pt-1 relative z-10">
              <p className="text-gray-600 leading-relaxed line-clamp-5 text-sm italic">&ldquo;{review.text}&rdquo;</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {data.url && (
        <div className="text-center mt-12 space-y-3">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold rounded-full px-10 py-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 text-base">
            <a href={data.url} target="_blank" rel="noopener noreferrer">
              Alle Bewertungen auf Google ansehen →
            </a>
          </Button>
          <p className="text-xs text-gray-400">Öffnet Google Maps in einem neuen Tab</p>
        </div>
      )}
    </div>
  );
}
