import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export function ReservarButacas(){

    const unityContext = new UnityContext({
        loaderUrl: "./Unity/Sala5/Build/Sala 5.loader.js",
        dataUrl: "./Unity/Sala5/Build/Sala 5.data",
        frameworkUrl: "./Unity/Sala5/Build/Sala 5.framework.js",
        codeUrl: "./Unity/Sala5/Build/Sala 5.wasm",
      });

    const haceralgo = () =>{
        unityContext.unityInstance.SendMessage('Javascript', 'TintGreen')
        console.log('SI PULSASTE')
    }

    return(
        <div>
            <Unity 
                unityContext={unityContext}
                style={{
                    width: "1000px",
                    height: "600px",
                    border: "2px solid black",
                    top: "50%",
                    left: "50%",
                    background: "black"
                }
                }
            />
            
            <div onClick={haceralgo}>ESTO ES UN BOTON</div>

        </div>
    );
} 