import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CloudinaryImage } from "./cloudinary-image";

type SearchResult = {
    public_id: string
}

export default async function GalleryPage() {

    const results = (await cloudinary.v2.search
        .expression("resource_type:image")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as {resources: SearchResult[]};

    return (
        <section> 
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Your Web Gallery</h1>
                    <UploadButton />
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {results.resources.map(results => (
                        <CloudinaryImage
                            width="400"
                            key={results.public_id}
                            height="300"
                            priority
                            src={results.public_id}
                            sizes="100vw"
                            alt="Description of my image"
                        />
                    ))}
                </div>
            </div>  
        </section>
    );
}