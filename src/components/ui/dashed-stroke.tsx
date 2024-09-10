import { cn } from "@/lib/utils";

export const DashedStroke = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute inset-0 bg-gray-950", className)}>
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle
            id="pattern-circle"
            cx="10"
            cy="10"
            r="1"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          ></circle>
        </pattern>
        <rect
          id="rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        ></rect>
      </svg>
    </div>
  );
};
