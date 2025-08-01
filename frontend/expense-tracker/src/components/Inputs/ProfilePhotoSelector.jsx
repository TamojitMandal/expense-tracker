import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu';

const ProfilePhotoSelector = ({image, setImage}) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            //update the image state
            setImage(file);
            //generate a preview URL from the file
            const preview = URL.createObjectURL(file);
            setPreviewUrl(preview);
            
        };
    };


    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

  return (
    <div className='flex justify-center mb-6'>
        <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleImageChange}
            className='hidden'
        />

        {!image ? (
            <div className="w-20 h-20  flex items-center justify-center bg-purple-100 rounded-full relative">
                <LuUser className='text-4xl text-primary' />

                <button 
                    type='button'
                    className='w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white absolute -bottom-1 -right-1'
                    onClick={onChooseFile}
                >
                    <LuUpload  />
                </button>
            </div>
        ) : (
            <div className='relative'>
                <img src={previewUrl} alt="profile photo" className='w-20 h-20 object-cover rounded-full'/>
                <button
                    type='button'
                    className='w-8 h-8 flex items-center justify-center rounded-full bg-red-500 absolute -bottom-1 -right-1'
                    onClick={handleRemoveImage}
                >
                    <LuTrash size={20} className='text-primary' />
                </button>
            </div>
        )}
    </div>
    )
}

export default ProfilePhotoSelector