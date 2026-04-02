import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/User.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    // get user details from frontend
    // validation - not empty
    // if user already exists - username, email
    // check for images, check for avatar, cover image
    // upload them to cloudinary, avatar
    // create user object - create entry in database
    // remove password and refreshToken field from response
    // check for user creation
    // return response to frontend


 const {fullName, username, email, password} = req.body

 console.log({fullName, username, email, password});
 
 if (
    [fullName, username, email, password].some((field) => 
        field?.trim() === "")
 ) {
    throw new ApiError("All fields are required", 400);
 }

 const existingUser = await User.findOne({
    $or: [
        {username},
        {email}
    ]   
 })

    if (existingUser) { 
        throw new ApiError("User already exists", 400);
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;


    if (!avatarLocalPath) {
        throw new ApiError("Avatar is required", 400);
    }

    if (!coverImageLocalPath) {
        throw new ApiError("Cover image is required", 400);
    }

    const avatarUploadResponse = await uploadOnCloudinary(avatarLocalPath);
    const coverImageUploadResponse = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatarUploadResponse) {
        throw new ApiError("Avatar upload failed", 500);
    }

    if (!coverImageUploadResponse) {
        throw new ApiError("Cover image upload failed", 500);
    }

   const user = await User.create({
        fullName,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatarUploadResponse.url,
        coverImage: coverImageUploadResponse.url
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken -__v"
    )

    if (!createdUser) {
        throw new ApiError("User creation failed", 500);
    }

    res.status(201).json(new ApiResponse(
        "User registered successfully",
        createdUser
    ))
});

export { registerUser };