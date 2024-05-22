'use client'
import FileUploadForm from "@/components/molecules/FileUploadForm";
import ImageGallery from "@/components/organisms/ImageGallery";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Pictures = () => {
    const router = useRouter();
    const [isUploaded, setIsUploaded] = useState(false);
    // useEffect(() => {
    //     const run = async() => {
    //         const accessToken = localStorage.getItem('sb-access-token');
    //         const refreshToken = localStorage.getItem('sb-refresh-token');

    //         if (!accessToken || !refreshToken) {
    //             router.replace('/')
    //             toast('usuario no autorizado')
    //         }

    //         const { data, error } = await supabase.auth.setSession({
    //             access_token: accessToken,
    //             refresh_token: refreshToken
    //         });
    //         console.log({data, error, accessToken,refreshToken})
    //         if (error) {
    //             router.replace('/')
    //         }
    //     }
    //     run()
    // },[]);

    return(
    <div className="p-10 absolute w-[86%] bg-white flex flex-col gap-4">
        <h1 className="text-[24px] font-bold">Pictures</h1>
        <div className="flex flex-wrap gap-[1rem] justify-start">
            <FileUploadForm setIsUploaded={setIsUploaded} />
            <ImageGallery isUploaded={isUploaded} setIsUploaded={setIsUploaded}/>
        </div>
    </div>
)};

export default Pictures;
