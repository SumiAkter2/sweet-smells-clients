import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ paddingRight:"20px", color: match? 'darkviolet':'green',fontSize:'15px',  textDecoration:'none',fontWeight:'bold' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
  }
  export default CustomLink;