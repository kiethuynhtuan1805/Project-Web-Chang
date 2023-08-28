import { useCallback } from 'react';
import './AvatarUpload.scss'
import { useDispatch } from 'react-redux';
import { Button, Image, message } from 'antd';
import { Icon } from '@iconify/react';

export default function AvatarUpload() {
    // Dispatch
    const dispatch = useDispatch();

    // Message
    const [messageApi, contextMessage] = message.useMessage();
    const messageError = useCallback(() => {
        messageApi.open({
            type: "error",
            content: "Failed!",
            duration: 2,
        });
    }, [messageApi]);
    const messageLoading = useCallback(() => {
        messageApi.open({
            type: "loading",
            content: "Loading!",
            duration: 0,
        });
    }, [messageApi]);

    const messageSuccess = useCallback(() => {
        messageApi.open({
            type: "success",
            content: "Success!",
            duration: 3,
        });
    }, [messageApi]);

    // Async function
    const handleUpdate = async (formData) => {
        messageLoading();
    }

    const getUpload = () => {
        const FILE_INPUT = document.querySelector("input[type=file]");
        const AVATAR = document.getElementsByClassName("avatar-view")[0];

        FILE_INPUT.addEventListener("change", (event) => {
            console.log(event.target.files);
            const file = event.target.files[0];
            let formData = new FormData();

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = (e) => {
                AVATAR.setAttribute("aria-label", file.name);
                AVATAR.style.background = `url(${reader.result}) center center/cover`;
            };
            formData.append("file", file);
            handleUpdate(formData);
        }, { once: true });
        FILE_INPUT.click();
    };

    return (
        <div className='AvatarUpload'>
            {contextMessage}
            <input type="file" name="image" id="image" accept="image/*" />
            <div className="avatar">
                <Image
                    width={'100px'}
                    height={'100px'}
                    preview={false}
                    src={'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-avatar-de-thuong-cho-Facebook.jpg'}
                    fallback={require('../../../assets/images/image-not-found.png')}
                    style={{ borderRadius: '50%', border: '1px solid #ccc' }}
                    className='avatar-view'
                />
                <Button
                    type="primary"
                    shape="circle"
                    id="btn-upload"
                    aria-label="upload image"
                    aria-describedby="image"
                    icon={<Icon icon="ic:baseline-plus" />}
                    onClick={getUpload}
                ></Button>
            </div>
        </div>
    );
}