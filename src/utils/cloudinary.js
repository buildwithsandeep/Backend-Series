import { v2 as cloudinary } from 'cloudinary'
import { log } from 'console';
import fs from 'fs';





    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAM, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
        // CLOUDINARY_URL=cloudinary://459323227462417:**********@ddd6r26mh
    });


    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if (!localFilePath) return null
            // upload the file on cloudinary
            const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })

            // file has been uploaded successfully
            console.log("file is uploaded on cloudinary ", response.url);
            return response
            

        } catch (error) {
            fs.unlinkSync(localFilePath)
            return null
        }
    }


    
export {uploadOnCloudinary}