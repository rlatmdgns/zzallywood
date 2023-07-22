import * as Styles from './styles'

const Upload = () => {

    const uploadImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        // Only Single Files
        if (event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            const reader = new FileReader()
            reader.onload = ((e) => {
                // Portal Open -> e.target.result
                console.log('이미지 경로 ::', e.target?.result)
            })
            reader.readAsDataURL(file)
        }
    }

    return (
        <Styles.UploadButtonWrap>
            <Styles.UploadInput id="upload_btn" type="file" onChange={uploadImage} />
            <Styles.UploadButton htmlFor="upload_btn" aria-label="Upload"></Styles.UploadButton>
        </Styles.UploadButtonWrap>
    )
}

export default Upload