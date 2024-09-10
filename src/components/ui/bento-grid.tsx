import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  children,
}: {
  className?: string;
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("rounded-xl overflow-hidden", className)}>
      {title && <h3 className="font-semibold text-xl mb-2">{title}</h3>}
      {children}
    </div>
  );
};
