import React from "react";

export function GridSmallBackgroundDemo() {
  return (
    <div className="fixed inset-0 h-full w-full bg-white  bg-grid-small-black/[0.2] items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)]"></div>
    </div>
  );
}
