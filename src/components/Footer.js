import React from "react";

function Footer() {
  const [year] = React.useState(new Date().getFullYear());
  return(
    <div className="footer">
      <p class="footer__copyright">&copy; {year}. bmazurme</p>
    </div>
  );
}

export default Footer