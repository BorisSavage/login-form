import { cn } from "@/lib/utils";

type Props = { headingText: string; children?: React.ReactNode };
export default function MainHeading({ headingText, children }: Props) {
  return (
    <div
      className={cn(
        "text-center max-w-xl w-full",
        "lg:max-w-5xl lg:text-left lg:px-2",
      )}
    >
      <h1 className={cn("text-3xl font-bold")}>{headingText}</h1>
      {children}
    </div>
  );
}
