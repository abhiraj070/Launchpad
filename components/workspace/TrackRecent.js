"use client";

import { useEffect } from "react";
import { addRecentProduct } from "@/lib/workspace";

// Records a product as recently opened when its detail page mounts. Renders
// nothing. Goes through the workspace layer — never touches storage directly.
export default function TrackRecent({ slug }) {
  useEffect(() => {
    addRecentProduct(slug);
  }, [slug]);

  return null;
}
