import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = ({info_reporte}) => {
    
  return (
    <Document>
      <Page
        size="A4"
        style={{
          //display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            //display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Text style={{ color: "#092144", fontSize: "20px" , padding: 10}}>
            REPORTE DE RESERVAS
          </Text>
          <Image
            src="http://localhost:3000/static/media/logo.5460feef.png"
            alt="logoprime"
            style={{ maxWidth: "60px", maxHeight: "40" }}
          />
            <Text style={{ textAlign: "justify", fontSize: "10px", marginTop: "15px" }}>
                _______________________________________________________________________________
            </Text>
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "9px",
              marginTop: "22px"
            }}
          >
            Reporte de butacas comercializadas            
          </Text>

          <Text style={{fontSize: "9px", marginTop: "8px" }}>
            CANTIDAD DE BUTACAS COMERCIALIZADAS: 
          </Text>

          <Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {info_reporte.acum_ventas}
          </Text>

          <Text style={{  fontSize: "9px", marginTop: "10px"}}>
            CANTIDAD DE BUTACAS NO COMERCIALIZADAS: 
          </Text>

          <Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {info_reporte.acum_no_ventas}
          </Text>

          <Text style={{  fontSize: "9px", marginTop: "10px"}}>
            MONTO RECAUDADO: 
          </Text>

          <Text style={{ textAlign: "justify", fontSize: "15px" }}>
            {'Bs. '+info_reporte.precio}
          </Text>
          

          <Text style={{ textAlign: "justify", fontSize: "9px" ,  marginTop: "10px"}}>
            DETALLE:
          </Text>
          {info_reporte.detalle.map(dato => (
            <Text style={{ textAlign: "justify", fontSize: "9px", marginTop: "4px" }}>
                {"- "+dato}
            </Text>
           ))}
            <Text style={{ textAlign: "justify", fontSize: "10px", marginTop: "150px" }}>
                _________________________________________
            </Text>
            <Text style={{ textAlign: "justify", fontSize: "10px",  marginTop: "6px" }}>
                Nombre completo:..................................
            </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;