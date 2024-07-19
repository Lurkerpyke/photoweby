"use client";

import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
  info: {
    public_id: string;
  },
  event: 'sucess';
}


export default function Home() {
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Upload you image */}
      <CldUploadButton
        uploadPreset="eevyium1"
        onSuccess={(result: UploadResult) => setImageId(result.info.public_id)}
      />

      {/* Image */}
      {imageId && (
        <CldImage
          width="400"
          height="300"
          priority
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}

    </main>
  );
}
