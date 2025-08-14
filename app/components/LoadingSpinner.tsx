export default function LoadingSpinner() {
  return (
  <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-300 border-t-orange-500"></div>
    </div>
  );
}