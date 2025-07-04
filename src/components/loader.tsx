interface LoaderProps {
  isLoading: boolean;
}

const Loader = ({ isLoading }: LoaderProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <h1 className="text-5xl whitespace-nowrap lg:text-6xl">
        {isLoading ? "ˁ ुᴗ_ᴗ)ु.｡oO" : "(ᵕ—ᴗ—)"}
      </h1>
      <h2>{isLoading ? "Loading..." : "Report not found"}</h2>
    </div>
  );
};

export default Loader;
