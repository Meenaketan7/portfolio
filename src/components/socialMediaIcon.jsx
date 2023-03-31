const SocialMediaIcons = ()=>{
    return(
        <div
        className="flex justify-center md:justify-start my-10 gap-7">
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/meenaketan-padhy-541b8621a/"
            target="_blank" //open in new tab
            rel="noreferrer"//support in old browser security
            >
                <img alt="Linked-in" src="../assets/linkedin.png"/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/MeenaketanPadhy"
            target="_blank" //open in new tab
            rel="noreferrer"//support in old browser security
            >
                <img alt="Twitter" src="../assets/twitter.png"/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/the_noobe_show_/"
            target="_blank" //open in new tab
            rel="noreferrer"//support in old browser security
            >
                <img alt="instagram" src="../assets/instagram.png"/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/meenaketanpadhy2002/"
            target="_blank" //open in new tab
            rel="noreferrer"//support in old browser security
            >
                <img alt="FaceBook" src="../assets/facebook.png"/>
            </a>
        </div>
    )
}
export default SocialMediaIcons;