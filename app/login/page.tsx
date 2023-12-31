import { cn } from "@/lib/utils";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center justify-start space-y-12 py-14 sm:py-28 px-4",
        "lg:space-y-4",
      )}
    >
      <div
        className={cn(
          "text-center max-w-xl w-full",
          "lg:max-w-5xl lg:text-left lg:px-2",
        )}
      >
        <h1 className={cn("text-3xl font-bold")}>
          <span className="underline decoration-blue-500 underline-offset-4">
            Logi
          </span>
          <span>n</span>
        </h1>
        <p className="font-medium">To access your account</p>
      </div>
      <LoginForm />
    </main>
  );
}
