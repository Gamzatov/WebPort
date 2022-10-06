gimport React from "react"
import ContentLoader from "react-content-loader"
const Loader = (props) => (
    <ContentLoader 
    className="loader"
    speed={2}
    width={490}
    height={270}
    viewBox="0 0 490 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="14" rx="10" ry="10" width="474" height="250" />
  </ContentLoader>
  )
  
  export default Loader