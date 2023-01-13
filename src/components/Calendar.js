import React from "react";

const GoogleCal = () => {
  return (
    <div>
      <iframe
        title="googleCalendar"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showDate=0&showNav=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=ZGVlamFjazQ3QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGRlNGVmYmtybWtrNWhhN2lrczduZjJxM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NjVmNmlqbTlnM3NjM2ZoN2EwYjIzNm1nc2Z2bTVpcDZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%23C0CA33&color=%233F51B5&color=%234285F4&color=%23616161"
        style={{ borderWidth: 0, padding: "20px" }}
        height="800px"
        width="96%"
      ></iframe>
    </div>
  );
};

export default GoogleCal;
