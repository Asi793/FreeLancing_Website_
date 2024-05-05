import './Footer.css'


export default function Footer() {
    return (
        <>
            <footer>
                <div class="foo foo_1">
                    <p>about your website or any links</p>
                </div>
                <div class="foo foo_2">
                    <div class="icons">
                        {/* <i class="fa-brands fa-codepen"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-twitch"></i>
                        <i class="fa-brands fa-discord"></i> */}

                        <p>icons you want or links you can insert</p>
                    </div>
                </div>
                <div class="foo foo_3">
                    <a href="mailto:yourmail@example">contact us</a>
                </div>
            </footer>
        </>
    )
}