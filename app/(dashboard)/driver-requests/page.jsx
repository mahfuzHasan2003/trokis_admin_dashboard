import DriverDocumentsCard from "@/components/driver-requests/driver-documents-card";

export default function DriverRequests() {
  return (
    <div className="flex flex-wrap gap-5 mb-10">
      {Array.from({ length: 12 }).map((_, index) => (
        <DriverDocumentsCard key={index} />
      ))}
    </div>
  );
}
