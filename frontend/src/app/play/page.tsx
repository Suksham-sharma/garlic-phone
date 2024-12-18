"use client";
import { Tldraw } from "tldraw";

export default function PlayGround() {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw onMount={(editor) => {}} />
    </div>
  );
}
