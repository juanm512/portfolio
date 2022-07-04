const MongoDB = ({className}) => {
    return (
        // <img alt="mongoIcon" src="data:image/png;base64,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" />
        <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 -2 48 48" style={{fill:"#000000"}}>
        <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path>
        <path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
        </svg>
    )
}
export default MongoDB;