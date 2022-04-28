import Wrapper from "../src/layout/Wrapper"
import Coding from "../src/views/Coding"
import config from "../blog.config.js"

const AboutPage = () => (
  <Wrapper
    url={config.url + "Coding"}
    title={"Avinash Sharma | Coding"}
    description={"My Coding journey" + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Coding />
  </Wrapper>
)

export default AboutPage
